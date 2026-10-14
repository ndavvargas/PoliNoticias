// Tabla de rutas: cada URL carga un componente de página
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticia/:id', component: DetalleComponent },   // :id llega al @Input() id del componente
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: '**', redirectTo: '' }
];
