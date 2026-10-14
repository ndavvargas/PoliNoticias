// Tarjeta de noticia reutilizable. Binding: @Input, [src], {{ }}, [routerLink], (click)
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Noticia } from '../../models/noticia.model';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="card h-100 shadow-sm">
    <img [src]="noticia.imagen" class="card-img-top" [alt]="noticia.titulo">
    <div class="card-body d-flex flex-column">
      <span class="badge text-bg-secondary align-self-start mb-2">{{ noticia.categoria }}</span>
      <h5 class="card-title">{{ noticia.titulo }}</h5>
      <p class="card-text">{{ noticia.descripcion }}</p>
      <div class="mt-auto d-flex justify-content-between align-items-center">
        <a [routerLink]="['/noticia', noticia.id]" class="btn btn-primary btn-sm">Ver más</a>
        <button class="btn btn-link fav-btn" (click)="svc.toggleFav(noticia.id)" aria-label="Favorito">
          {{ svc.esFav(noticia.id) ? '♥' : '♡' }}</button>
      </div>
    </div>
  </div>`
})
export class NewsCardComponent {
  @Input({ required: true }) noticia!: Noticia;   // la noticia llega desde el componente padre
  svc = inject(NoticiasService);
}
