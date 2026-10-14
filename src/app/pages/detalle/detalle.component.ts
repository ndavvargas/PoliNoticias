// Detalle de una noticia. El :id de la ruta llega al @Input() id (withComponentInputBinding)
import { Component, Input, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Noticia } from '../../models/noticia.model';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [NgIf, RouterLink],
  template: `
  <ng-container *ngIf="noticia as n; else noEncontrada">
    <nav aria-label="breadcrumb"><ol class="breadcrumb">
      <li class="breadcrumb-item"><a routerLink="/noticias">Noticias</a></li>
      <li class="breadcrumb-item active">{{ n.titulo }}</li></ol></nav>
    <img [src]="n.imagen" class="img-fluid rounded w-100 detalle-img mb-3" [alt]="n.titulo">
    <span class="badge text-bg-secondary">{{ n.categoria }}</span>
    <small class="text-muted ms-2">Publicado: {{ n.fecha }}</small>
    <h1 class="mt-2">{{ n.titulo }}</h1>
    <p class="fs-5">{{ n.contenido }}</p>
    <button class="btn btn-outline-danger me-2" (click)="svc.toggleFav(n.id)">
      {{ svc.esFav(n.id) ? '♥ Quitar de favoritos' : '♡ Agregar a favoritos' }}</button>
    <a routerLink="/contacto" class="btn btn-primary">Contactar</a>
  </ng-container>
  <ng-template #noEncontrada>
    <div class="alert alert-warning">Noticia no encontrada. <a routerLink="/noticias">Volver al catálogo</a></div>
  </ng-template>`
})
export class DetalleComponent {
  @Input() id = '';
  svc = inject(NoticiasService);
  get noticia(): Noticia | undefined { return this.svc.obtener(+this.id); }
}
