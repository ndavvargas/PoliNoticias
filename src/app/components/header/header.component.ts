// Header con menú de navegación. Binding: [class.show], (click), *ngFor, routerLinkActive
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-brand"><div class="container">
    <a class="navbar-brand fw-bold" routerLink="/">📰 Noticias Poli</a>
    <button class="navbar-toggler" type="button" (click)="abierto = !abierto" aria-label="Menú">
      <span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" [class.show]="abierto">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item" *ngFor="let e of enlaces">
          <a class="nav-link" [routerLink]="e.ruta" routerLinkActive="active fw-bold"
             [routerLinkActiveOptions]="{ exact: true }" (click)="abierto = false">{{ e.texto }}</a>
        </li>
      </ul>
    </div>
  </div></nav>`
})
export class HeaderComponent {
  abierto = false;
  enlaces = [
    { ruta: '/', texto: 'Home' }, { ruta: '/noticias', texto: 'Noticias' },
    { ruta: '/favoritos', texto: 'Favoritos' }, { ruta: '/contacto', texto: 'Contacto' },
    { ruta: '/acerca', texto: 'Acerca de' }, { ruta: '/gestion', texto: 'Gestión' }
  ];
}
