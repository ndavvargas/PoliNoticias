// Home: bienvenida, noticias destacadas, llamados a la acción y testimonios
import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NoticiasService } from '../../services/noticias.service';
import { NewsCardComponent } from '../../components/news-card/news-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink, NewsCardComponent],
  template: `
  <section class="hero rounded-4 p-5 mb-5 text-white">
    <h1 class="display-5 fw-bold">Bienvenido a Noticias Poli</h1>
    <p class="lead">Educación, tecnología, turismo y comercio en un solo lugar.</p>
    <a routerLink="/noticias" class="btn btn-light btn-lg">Explorar noticias</a>
  </section>
  <h2 class="mb-3">Noticias destacadas</h2>
  <div class="row g-4 mb-4">
    <div class="col-sm-6 col-lg-4" *ngFor="let n of svc.destacadas()"><app-news-card [noticia]="n"></app-news-card></div>
  </div>
  <div class="text-center mb-5">
    <a routerLink="/noticias" class="btn btn-primary me-2">Ver noticias</a>
    <a routerLink="/contacto" class="btn btn-outline-primary">Contactar</a>
  </div>
  <h2 class="mb-3">Lo que dicen nuestros lectores</h2>
  <div class="row g-3">
    <div class="col-md-4" *ngFor="let t of testimonios"><div class="card card-body">
      <p class="mb-1">“{{ t.texto }}”</p><small class="text-muted">— {{ t.autor }}</small></div></div>
  </div>`
})
export class HomeComponent {
  svc = inject(NoticiasService);
  testimonios = [
    { autor: 'Laura M.', texto: 'Me encanta poder guardar mis noticias favoritas.' },
    { autor: 'Carlos R.', texto: 'Un diseño claro y muy fácil de usar.' },
    { autor: 'Sofía P.', texto: 'Las noticias educativas me ayudan en mis estudios.' }
  ];
}
