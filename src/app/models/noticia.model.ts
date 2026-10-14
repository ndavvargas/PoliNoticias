// Modelo de datos de una noticia (coincide con assets/data/noticias.json)
export interface Noticia {
  id: number;
  titulo: string;
  categoria: string;
  fecha: string;
  imagen: string;
  descripcion: string;
  contenido: string;
  destacada: boolean;
}
