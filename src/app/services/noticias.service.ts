// Servicio central: datos (JSON + localStorage), favoritos y mini CRUD.
// Usa signals: al cambiar su valor, las vistas que lo leen se actualizan solas.
import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../models/noticia.model';

const K_DATA = 'noticias_data';
const K_FAVS = 'noticias_favoritos';

@Injectable({ providedIn: 'root' })
export class NoticiasService {
  private http = inject(HttpClient);

  readonly categorias = ['Educación', 'Tecnología', 'Turismo', 'Comercial'];
  readonly noticias = signal<Noticia[]>([]);
  readonly favoritos = signal<number[]>(this.leer<number[]>(K_FAVS, []));
  // Valores derivados (se recalculan solos)
  readonly destacadas = computed(() => this.noticias().filter(n => n.destacada).slice(0, 3));
  readonly favoritas = computed(() => this.noticias().filter(n => this.favoritos().includes(n.id)));

  constructor() {
    // 1) copia local si existe; 2) si no, se lee el JSON y se guarda
    const guardadas = this.leer<Noticia[] | null>(K_DATA, null);
    if (guardadas) {
      this.noticias.set(guardadas);
    } else {
      this.http.get<Noticia[]>('assets/data/noticias.json').subscribe(d => { this.noticias.set(d); this.guardar(); });
    }
  }

  /* ---- persistencia ---- */
  private leer<T>(clave: string, defecto: T): T {
    try { const v = localStorage.getItem(clave); return v ? (JSON.parse(v) as T) : defecto; } catch { return defecto; }
  }
  private guardar() { localStorage.setItem(K_DATA, JSON.stringify(this.noticias())); }
  private guardarFavs() { localStorage.setItem(K_FAVS, JSON.stringify(this.favoritos())); }

  /* ---- consulta ---- */
  obtener(id: number): Noticia | undefined { return this.noticias().find(n => n.id === id); }

  /* ---- favoritos ---- */
  esFav(id: number): boolean { return this.favoritos().includes(id); }
  toggleFav(id: number) {
    this.favoritos.update(f => (f.includes(id) ? f.filter(x => x !== id) : [...f, id]));
    this.guardarFavs();
  }
  vaciarFavoritos() { this.favoritos.set([]); this.guardarFavs(); }

  /* ---- mini CRUD ---- */
  crear(d: { titulo: string; categoria: string; imagen: string; descripcion: string }) {
    const id = Math.max(0, ...this.noticias().map(n => n.id)) + 1;
    const nueva: Noticia = {
      id, titulo: d.titulo.trim(), categoria: d.categoria,
      fecha: new Date().toISOString().slice(0, 10),
      imagen: d.imagen.trim() || `https://picsum.photos/seed/n${id}/600/400`,
      descripcion: d.descripcion.trim(), contenido: d.descripcion.trim(), destacada: false
    };
    this.noticias.update(l => [...l, nueva]);
    this.guardar();
  }
  eliminar(id: number) {
    this.noticias.update(l => l.filter(n => n.id !== id));
    this.favoritos.update(f => f.filter(x => x !== id));   // limpia favoritos huérfanos
    this.guardar(); this.guardarFavs();
  }
}
