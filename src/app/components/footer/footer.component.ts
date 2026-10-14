// Footer con información general y de contacto
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
  <footer class="py-4 mt-4"><div class="container d-flex flex-wrap justify-content-between gap-2">
    <span>© 2026 Noticias Poli · Bogotá</span>
    <span>info&#64;noticias.com · +57 300 000 0000</span>
    <span><a href="#">Redes</a> · <a href="#">Términos</a></span>
  </div></footer>`
})
export class FooterComponent {}
