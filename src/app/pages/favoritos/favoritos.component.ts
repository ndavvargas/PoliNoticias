// Favoritos: lista personalizada, filtros por categoría, vaciar y estado vacío
import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Noticia } from '../../models/noticia.model';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  template: `
  <h1 class="h2">Mis favoritos</h1>
  <p class="text-muted">{{ svc.favoritas().length }} noticia(s) guardada(s)</p>
  <div class="d-flex flex-wrap gap-2 mb-3">
    <button *ngFor="let c of filtros" class="btn btn-sm" [class.btn-primary]="c === cat" [class.btn-outline-primary]="c !== cat"
            (click)="cat = c">{{ c || 'Todas' }}</button>
    <button class="btn btn-sm btn-outline-danger ms-auto" [disabled]="svc.favoritas().length === 0" (click)="vaciar()">Vaciar lista</button>
  </div>
  <ul class="list-group" *ngIf="svc.favoritas().length > 0; else vacio">
    <li class="list-group-item d-flex gap-3 align-items-center" *ngFor="let n of lista">
      <img [src]="n.imagen" alt="" class="thumb rounded">
      <div class="flex-grow-1"><h5 class="mb-0">{{ n.titulo }}</h5>
        <small class="text-muted">{{ n.categoria }} · {{ n.fecha }}</small>
        <p class="mb-0">{{ n.descripcion }}</p></div>
      <a [routerLink]="['/noticia', n.id]" class="btn btn-primary btn-sm">Ver más</a>
      <button class="btn btn-link fav-btn" (click)="svc.toggleFav(n.id)" aria-label="Quitar">♥</button>
    </li>
  </ul>
  <ng-template #vacio>
    <div class="empty text-center p-4 rounded">
      <p>Aún no guardas noticias. Explora el catálogo y haz clic en el corazón para agregarlas.</p>
      <a routerLink="/noticias" class="btn btn-primary">Explorar noticias</a></div>
  </ng-template>`
})
export class FavoritosComponent {
  svc = inject(NoticiasService);
  filtros = ['', ...this.svc.categorias];
  cat = '';
  get lista(): Noticia[] { return this.svc.favoritas().filter(n => !this.cat || n.categoria === this.cat); }
  vaciar() { if (confirm('¿Vaciar toda la lista de favoritos?')) this.svc.vaciarFavoritos(); }
}
