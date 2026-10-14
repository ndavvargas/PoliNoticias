// Contacto: formulario con validaciones (template-driven forms) y mensaje de confirmación
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [NgIf, FormsModule],
  template: `
  <h1 class="h2 mb-3">Contacto</h1>
  <div class="alert alert-success" role="alert" *ngIf="ok">¡Gracias! Hemos recibido tu mensaje y te responderemos pronto.</div>
  <form #f="ngForm" (ngSubmit)="enviar(f)" novalidate class="col-lg-7">
    <div class="mb-3"><label class="form-label" for="nombre">Nombre completo *</label>
      <input id="nombre" name="nombre" class="form-control" [(ngModel)]="datos.nombre" required [pattern]="texto" #nombre="ngModel"
             [class.is-invalid]="nombre.invalid && (nombre.touched || intento)">
      <div class="invalid-feedback">El nombre es obligatorio.</div></div>
    <div class="mb-3"><label class="form-label" for="correo">Correo electrónico *</label>
      <input id="correo" name="correo" class="form-control" [(ngModel)]="datos.correo" required [pattern]="emailPattern" #correo="ngModel"
             [class.is-invalid]="correo.invalid && (correo.touched || intento)">
      <div class="invalid-feedback">Ingresa un correo válido.</div></div>
    <div class="mb-3"><label class="form-label" for="mensaje">Mensaje *</label>
      <textarea id="mensaje" name="mensaje" rows="5" class="form-control" [(ngModel)]="datos.mensaje" required [pattern]="texto" #mensaje="ngModel"
                [class.is-invalid]="mensaje.invalid && (mensaje.touched || intento)"></textarea>
      <div class="invalid-feedback">El mensaje es obligatorio.</div></div>
    <button class="btn btn-primary" type="submit">Enviar mensaje</button>
  </form>`
})
export class ContactoComponent {
  datos = { nombre: '', correo: '', mensaje: '' };
  ok = false;
  intento = false;
  readonly texto = '.*\\S.*';                                  // al menos un carácter que no sea espacio
  readonly emailPattern = '[^\\s@]+@[^\\s@]+\\.[^\\s@]+';     // correo con formato válido

  enviar(f: NgForm) {
    this.intento = true;
    this.ok = f.valid === true;
    if (this.ok) { f.resetForm({ nombre: '', correo: '', mensaje: '' }); this.intento = false; }
  }
}
