// Componente raíz: header + contenido de la ruta activa + footer
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  host: { class: 'd-flex flex-column min-vh-100' },
  template: `
    <app-header></app-header>
    <main class="container py-4 flex-grow-1"><router-outlet></router-outlet></main>
    <app-footer></app-footer>`
})
export class AppComponent {}
