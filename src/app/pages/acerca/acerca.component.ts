// Acerca de: información del proyecto
import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca',
  standalone: true,
  template: `
  <h1 class="h2 mb-3">Acerca de</h1>
  <p>Noticias Poli es una plataforma web tipo periódico desarrollada por el Conjunto 27 del Politécnico Grancolombiano (Ingeniería de Software, módulo Front End).</p>
  <p>Permite explorar noticias educativas, tecnológicas, turísticas y comerciales, ver su detalle, guardarlas en favoritos, contactarnos y gestionar el catálogo.</p>
  <h2 class="h5 mt-4">Tecnologías</h2>
  <ul><li>Angular (componentes standalone, servicios, enrutamiento y formularios)</li><li>HTML5, CSS3 y TypeScript</li><li>Bootstrap 5</li><li>JSON local y localStorage</li></ul>`
})
export class AcercaComponent {}
