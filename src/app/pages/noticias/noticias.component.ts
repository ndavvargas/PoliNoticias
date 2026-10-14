// Catálogo con filtro por categoría. Binding bidireccional: [(ngModel)]
import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Noticia } from '../../models/noticia.model';
import { NoticiasService } from '../../services/noticias.service';
import { NewsCardComponent } from '../../components/news-card/news-card.component';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NewsCardComponent],
  template: `
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-4">
    <h1 class="h2">Catálogo de Noticias</h1>
    <select class="form-select w-auto" [(ngModel)]="categoria" aria-label="Filtrar por categoría">
      <option value="">Todas las categorías</option>
      <option *ngFor="let c of svc.categorias" [value]="c">{{ c }}</option>
    </select>
  </div>
  <div class="row g-4">
    <div class="col-sm-6 col-lg-4" *ngFor="let n of filtradas"><app-news-card [noticia]="n"></app-news-card></div>
  </div>
  <p *ngIf="filtradas.length === 0">No hay noticias en esta categoría.</p>`
})
export class NoticiasComponent {
  svc = inject(NoticiasService);
  categoria = '';
  get filtradas(): Noticia[] { return this.svc.noticias().filter(n => !this.categoria || n.categoria === this.categoria); }
}
