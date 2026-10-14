// Gestión (mini CRUD): crear, buscar y eliminar noticias con modal de confirmación
import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Noticia } from '../../models/noticia.model';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  template: `
  <h1 class="h2">Gestión de noticias</h1>
  <p class="text-muted">Crea o elimina noticias del catálogo.</p>
  <div class="row g-4">
    <div class="col-lg-4">
      <form #f="ngForm" (ngSubmit)="guardar(f)" novalidate class="card card-body">
        <h2 class="h5">Nueva noticia</h2>
        <label class="form-label mt-2" for="titulo">Título *</label>
        <input id="titulo" name="titulo" class="form-control" placeholder="Título de la noticia" [(ngModel)]="nuevo.titulo" required [pattern]="texto" #titulo="ngModel"
               [class.is-invalid]="titulo.invalid && (titulo.touched || intento)">
        <div class="invalid-feedback">Obligatorio.</div>
        <label class="form-label mt-2" for="categoria">Categoría *</label>
        <select id="categoria" name="categoria" class="form-select" [(ngModel)]="nuevo.categoria" required #categoria="ngModel"
                [class.is-invalid]="categoria.invalid && (categoria.touched || intento)">
          <option value="">Selecciona una categoría</option>
          <option *ngFor="let c of svc.categorias" [value]="c">{{ c }}</option>
        </select>
        <div class="invalid-feedback">Selecciona una categoría.</div>
        <label class="form-label mt-2" for="imagen">Imagen (URL)</label>
        <input id="imagen" name="imagen" class="form-control" placeholder="https://..." [(ngModel)]="nuevo.imagen" [pattern]="urlPattern" #imagen="ngModel"
               [class.is-invalid]="imagen.invalid">
        <div class="invalid-feedback">Debe iniciar con http(s)://</div>
        <label class="form-label mt-2" for="descripcion">Descripción *</label>
        <textarea id="descripcion" name="descripcion" rows="4" class="form-control" placeholder="Resumen de la noticia" [(ngModel)]="nuevo.descripcion" required [pattern]="texto" #descripcion="ngModel"
                  [class.is-invalid]="descripcion.invalid && (descripcion.touched || intento)"></textarea>
        <div class="invalid-feedback">Obligatoria.</div>
        <button class="btn btn-primary mt-3" type="submit">Guardar noticia</button>
      </form>
    </div>
    <div class="col-lg-8">
      <input class="form-control mb-3" placeholder="Buscar noticia..." [(ngModel)]="buscar" name="buscar">
      <div class="table-responsive"><table class="table align-middle">
        <thead><tr><th>Título</th><th>Categoría</th><th>Fecha</th><th></th></tr></thead>
        <tbody>
          <tr *ngFor="let n of filtradas"><td>{{ n.titulo }}</td><td>{{ n.categoria }}</td><td>{{ n.fecha }}</td>
            <td class="text-end"><button class="btn btn-sm btn-outline-danger" (click)="idBorrar = n.id">Eliminar</button></td></tr>
          <tr *ngIf="filtradas.length === 0"><td colspan="4" class="text-muted">Sin resultados.</td></tr>
        </tbody></table></div>
    </div>
  </div>
  <div class="modal-fondo" *ngIf="idBorrar !== null"><div class="modal-caja card card-body">
    <h5>¿Eliminar esta noticia?</h5><p>Esta acción no se puede deshacer.</p>
    <div class="d-flex justify-content-end gap-2">
      <button class="btn btn-outline-secondary" (click)="idBorrar = null">Cancelar</button>
      <button class="btn btn-danger" (click)="confirmar()">Eliminar</button></div></div></div>`
})
export class GestionComponent {
  svc = inject(NoticiasService);
  nuevo = { titulo: '', categoria: '', imagen: '', descripcion: '' };
  buscar = '';
  idBorrar: number | null = null;
  intento = false;
  readonly texto = '.*\\S.*';
  readonly urlPattern = 'https?://.+';

  get filtradas(): Noticia[] {
    return this.svc.noticias().filter(n => n.titulo.toLowerCase().includes(this.buscar.toLowerCase()));
  }
  guardar(f: NgForm) {
    this.intento = true;
    if (f.invalid) return;
    this.svc.crear(this.nuevo);
    f.resetForm({ titulo: '', categoria: '', imagen: '', descripcion: '' });
    this.intento = false;
  }
  confirmar() { if (this.idBorrar !== null) this.svc.eliminar(this.idBorrar); this.idBorrar = null; }
}
