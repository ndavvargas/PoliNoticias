# Noticias Poli – Entrega final (Angular)

Plataforma web de noticias del Conjunto 27 (Front End, Politécnico Grancolombiano).

## Ejecutar en local
Requisitos: Node.js 18.19 o superior (recomendado 20).
```
npm install
npm start          # abre http://localhost:4200
```

## Construir para producción
```
npm run build      # genera dist/noticias-poli/browser
```

## Desplegar
- **Netlify / Vercel:** importar el repositorio de GitHub. Build command: `npm run build`. Publish/Output directory: `dist/noticias-poli/browser`.
- **GitHub Pages:** `npx ng build --base-href /NOMBRE-DEL-REPO/` y publicar el contenido de `dist/noticias-poli/browser`.
Las rutas usan `#` (HashLocation), por lo que no hace falta configurar redirecciones.

## Estructura
```
src/app/
├── app.component.ts / app.config.ts / app.routes.ts
├── models/noticia.model.ts
├── services/noticias.service.ts      datos, favoritos y CRUD (signals + localStorage)
├── components/                       header, footer, news-card
└── pages/                            home, noticias, detalle, favoritos, contacto, gestion, acerca
src/assets/data/noticias.json         datos iniciales
```
