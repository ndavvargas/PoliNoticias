# ENTREGA FINAL: PORTAL WEB NOTICIAS POLI
**Módulo:** Desarrollo Front-End  
**Institución:** Politécnico Grancolombiano  
**Entrega:** Entrega 3 – Entrega Final (Semana 7)  
**Fecha:** Octubre de 2026  

---

## PORTADA

**Título del Proyecto:**  
Implementación y Despliegue de una Plataforma Web de Noticias con Angular 18: Portal "Noticias Poli"

**Integrantes:**  
- [Nombre del Estudiante / Integrantes del Grupo]

**Docente:**  
- [Nombre del Tutor/Docente]

**Institución Universitaria:**  
Politécnico Grancolombiano  
Facultad de Ingeniería, Diseño e Innovación  
Bogotá D.C., Colombia  
2026

---

## TABLA DE CONTENIDO

1. [Información General y Enlaces de Entrega](#1-información-general-y-enlaces-de-entrega)
2. [Introducción](#2-introducción)
3. [Objetivos del Proyecto](#3-objetivos-del-proyecto)
   - 3.1 Objetivo General
   - 3.2 Objetivos Específicos
4. [Tecnologías y Herramientas Utilizadas](#4-tecnologías-y-herramientas-utilizadas)
5. [Arquitectura del Aplicativo y Estructura del Código](#5-arquitectura-del-aplicativo-y-estructura-del-código)
6. [Implementación en Angular: Componentes y Tipos de Binding](#6-implementación-en-angular-componentes-y-tipos-de-binding)
   - 6.1 Componentes Standalone
   - 6.2 Property Binding y Event Binding
   - 6.3 Two-Way Data Binding
   - 6.4 Comunicación entre Componentes (@Input)
   - 6.5 Reactividad con Angular Signals
7. [Descripción Funcional de los Módulos del Sistema](#7-descripción-funcional-de-los-módulos-del-sistema)
   - 7.1 Página de Inicio (Home)
   - 7.2 Catálogo y Búsqueda de Noticias
   - 7.3 Vista Detalle de Noticia
   - 7.4 Sistema de Noticias Favoritas
   - 7.5 Módulo de Gestión / CRUD de Noticias
   - 7.6 Formulario de Contacto con Validaciones
   - 7.7 Sección Acerca de
8. [Estrategia de Despliegue en GitHub Pages](#8-estrategia-de-despliegue-en-github-pages)
9. [Guía de Instalación y Ejecución en Local](#9-guía-de-instalación-y-ejecución-en-local)
10. [Conclusiones](#10-conclusiones)
11. [Referencias Bibliográficas](#11-referencias-bibliográficas)

---

## 1. INFORMACIÓN GENERAL Y ENLACES DE ENTREGA

| Elemento | Enlace / Ubicación |
| :--- | :--- |
| **URL del Aplicativo en Producción (Desplegado)** | **https://ndavvargas.github.io/PoliNoticias/** |
| **Repositorio en GitHub (Código Fuente)** | **https://github.com/ndavvargas/PoliNoticias** |
| **Video Explicativo (Máx. 3 minutos)** | *[Pegar aquí el link de YouTube del video]* |

---

## 2. INTRODUCCIÓN

En la era de la información digital, los portales de divulgación y noticias exigen arquitecturas web de alto rendimiento, capaces de ofrecer una experiencia fluida, interactiva y accesible en cualquier dispositivo. En el contexto del módulo de Desarrollo Front-End del Politécnico Grancolombiano, este proyecto presenta el diseño, desarrollo, pruebas y puesta en producción de **Noticias Poli**, una plataforma web desarrollada sobre la versión más reciente del ecosistema Angular (Angular 18).

El aplicativo se enfoca en la centralización y consumo de información de actualidad clasificada en distintas categorías (Educación, Tecnología, Turismo y Comercio). Implementa los estándares contemporáneos de la industria: arquitectura de componentes autónomos (*Standalone Components*), reactividad basada en *Signals*, persistencia en el cliente a través de la API *LocalStorage*, y una estrategia de integración continua y despliegue en la nube mediante *GitHub Pages*.

---

## 3. OBJETIVOS DEL PROYECTO

### 3.1 Objetivo General
Desarrollar y desplegar una aplicación web funcional de noticias en el framework Angular, aplicando buenas prácticas de desarrollo modular, enlace de datos (*data binding*), diseño responsivo y persistencia de información en el cliente.

### 3.2 Objetivos Específicos
- Diseñar una interfaz intuitiva, moderna y accesible soportada en HTML5 semántico y Bootstrap 5.
- Implementar la arquitectura basada en componentes independientes (*Standalone Components*) eliminando la necesidad de módulos tradicionales (*NgModule*).
- Aplicar los diferentes tipos de enlace de datos (*Property Binding, Event Binding, Two-way Binding* e *Interpolation*) para garantizar dinamismo en las vistas.
- Implementar un servicio centralizado con *Angular Signals* para gestionar el estado de las noticias, el sistema de favoritos y las operaciones CRUD.
- Configurar el enrutamiento con *HashLocationStrategy* para garantizar la navegación sin fallas de redirección 404 en servidores de alojamiento estático.
- Desplegar la aplicación en un entorno de producción accesible públicamente vía HTTPS a través de GitHub Pages.

---

## 4. TECNOLOGÍAS Y HERRAMIENTAS UTILIZADAS

| Categoría | Tecnología / Herramienta | Versión | Justificación Técnica |
| :--- | :--- | :--- | :--- |
| **Framework Base** | Angular | 18.2.0 | Framework líder para aplicaciones SPA robustas, componentes standalone y renderizado eficiente. |
| **Lenguaje de Programación**| TypeScript | 5.5.2 | Tipado estático, interfaces fuertemente tipadas y soporte para sintaxis moderna de ECMAScript. |
| **Gestión de Reactividad** | Angular Signals & RxJS | 7.8.0 | Reactividad granular que optimiza la detección de cambios sin sobrecarga en el DOM. |
| **Diseño y Maquetación** | HTML5, CSS3, Bootstrap | 5.3.3 | Sistema de cuadrículas responsivo, estilos consistentes y utilidades flexibles. |
| **Control de Versiones** | Git & GitHub | 2.48+ | Control de código fuente distribuido y trazabilidad de commits. |
| **Entorno de Ejecución** | Node.js (LTS) | 20.20.2 | Motor V8 para ejecución de herramientas de compilación y empaquetado. |
| **Servidor y Despliegue** | GitHub Pages & GitHub CLI | 2.102.0 | Alojamiento en la nube de alta disponibilidad, seguro y con soporte SSL gratuito. |

---

## 5. ARQUITECTURA DEL APLICATIVO Y ESTRUCTURA DEL CÓDIGO

El proyecto sigue una arquitectura modular y escalable por capas de responsabilidad única:

```text
src/
├── app/
│   ├── components/                # Componentes reutilizables de UI
│   │   ├── header/                # Barra de navegación principal y enlaces activos
│   │   ├── footer/                # Pie de página y datos de contacto institucional
│   │   └── news-card/             # Tarjeta reutilizable para visualización de noticias
│   ├── models/                    # Definición de interfaces de dominio
│   │   └── noticia.model.ts       # Estructura del objeto Noticia
│   ├── pages/                     # Vistas / páginas asociadas a rutas
│   │   ├── home/                  # Portada con noticias destacadas y banner
│   │   ├── noticias/              # Catálogo con filtrado por categoría y búsqueda
│   │   ├── detalle/               # Vista detallada individual (:id)
│   │   ├── favoritos/             # Listado de noticias marcadas como favoritas
│   │   ├── gestion/               # Formulario CRUD para agregar y eliminar noticias
│   │   ├── contacto/              # Formulario validado de contacto institucional
│   │   └── acerca/                # Información institucional del proyecto
│   ├── services/                  # Servicios lógicos y acceso a datos
│   │   └── noticias.service.ts    # Gestión reactiva de estado (Signals + LocalStorage)
│   ├── app.component.ts           # Componente raíz y esqueleto base
│   ├── app.config.ts              # Configuración de proveedores (Router + HttpClient)
│   └── app.routes.ts              # Tabla de rutas de la aplicación
├── assets/
│   └── data/
│       └── noticias.json          # Semilla inicial de datos de noticias
├── index.html                     # Plantilla HTML principal
├── main.ts                        # Punto de arranque de la aplicación (bootstrapApplication)
└── styles.css                     # Estilos globales y variables de identidad visual
```

---

## 6. IMPLEMENTACIÓN EN ANGULAR: COMPONENTES Y TIPOS DE BINDING

Uno de los pilares evaluativos del módulo es la correcta implementación de componentes y mecanismos de enlace de datos (*Data Binding*):

### 6.1 Componentes Standalone
Cada componente se declara con `standalone: true`, importando explícitamente únicamente las directivas o módulos requeridos (`NgIf`, `NgFor`, `RouterLink`, `FormsModule`), lo cual reduce el tamaño del paquete final (*bundle size*) y mejora los tiempos de carga inicial.

### 6.2 Property Binding (`[...]`) y Event Binding (`(...)`)
- **Property Binding:** Se utiliza para enlazar propiedades del DOM con atributos de los componentes. Por ejemplo, en el componente reutilizable `NewsCardComponent`, la imagen de la noticia se enlaza dinámicamente:
  ```html
  <img [src]="noticia.imagen" [alt]="noticia.titulo" class="card-img-top">
  ```
- **Event Binding:** Captura las interacciones del usuario en tiempo real. Por ejemplo, al marcar o desmarcar una noticia como favorita:
  ```html
  <button (click)="toggleFavorito(noticia.id)" class="btn btn-outline-danger">
  ```

### 6.3 Two-Way Data Binding (`[(ngModel)]`)
En los formularios de **Gestión de Noticias** y **Contacto**, se aplica el enlace bidireccional mediante `[(ngModel)]` para sincronizar en tiempo real el modelo de TypeScript con los controles de entrada HTML:
```html
<input type="text" [(ngModel)]="nuevaNoticia.titulo" name="titulo" required class="form-control">
```

### 6.4 Comunicación entre Componentes (`@Input()`)
El componente `NewsCardComponent` recibe la información de la noticia desde sus componentes contenedores mediante el decorador de entrada:
```typescript
@Input({ required: true }) noticia!: Noticia;
```
Esto permite reutilizar la misma tarjeta en la página de inicio, en el catálogo general y en la bandeja de favoritos.

### 6.5 Reactividad con Angular Signals
En lugar de depender exclusivamente de suscripciones manuales a observables de RxJS, el proyecto aprovecha las **Signals** de Angular (`signal` y `computed`), garantizando que la lista de favoritos y la lista maestra de noticias se actualicen de manera instantánea y limpia en todas las vistas.

---

## 7. DESCRIPCIÓN FUNCIONAL DE LOS MÓDULOS DEL SISTEMA

### 7.1 Página de Inicio (`Home`)
Presenta un encabezado de bienvenida, destaca las noticias con etiqueta `destacada: true` en formato de tarjetas visuales y ofrece accesos directos a las secciones principales del portal.

### 7.2 Catálogo y Búsqueda de Noticias (`Noticias`)
Muestra el universo completo de artículos. Dispone de:
- Un campo de búsqueda por texto que evalúa título y descripción en tiempo real.
- Botones de filtro por categoría (*Educación*, *Tecnología*, *Turismo*, *Comercial* y *Todas*).
- Contador reactivo de resultados encontrados.

### 7.3 Vista Detalle de Noticia (`Detalle`)
Permite leer el contenido extendido de un artículo seleccionado. Se apoya en el enrutamiento dinámico `noticia/:id`. La configuración global `withComponentInputBinding()` suministra el identificador de ruta directamente al `@Input() id` del componente, simplificando la lógica de recuperación de datos.

### 7.4 Sistema de Noticias Favoritas (`Favoritos`)
Permite a los usuarios marcar noticias de su interés. El estado se almacena de forma persistente en `localStorage`, de modo que las elecciones del usuario se conservan incluso al cerrar o recargar la pestaña del navegador.

### 7.5 Módulo de Gestión / CRUD de Noticias (`Gestion`)
Ofrece un panel administrativo simple pero completo que permite:
- **Crear noticias:** Formulario con validación de campos requeridos (título, categoría, fecha, descripción, imagen y contenido).
- **Listar noticias:** Tabla con la relación de noticias vigentes y su estado destacado.
- **Eliminar noticias:** Botón de acción para remover cualquier registro del almacenamiento local.
- **Restablecer datos:** Botón de conveniencia para volver a cargar la semilla original de `noticias.json`.

### 7.6 Formulario de Contacto (`Contacto`)
Incluye validación en tiempo de captura para nombre, correo electrónico (mediante expresión regular `[^\\s@]+@[^\\s@]+\\.[^\\s@]+`), asunto y mensaje. Notifica al usuario con alertas visuales de Bootstrap al momento de completar el envío exitoso.

### 7.7 Sección Institucional (`Acerca`)
Describe el objetivo formativo del proyecto dentro del marco del Politécnico Grancolombiano, detallando los créditos y la versión de la plataforma.

---

## 8. ESTRATEGIA DE DESPLIEGUE EN GITHUB PAGES

El despliegue en un entorno real presentó dos consideraciones técnicas clave que fueron resueltas exitosamente:

1. **Resolución de Rutas Base (*Base Href*):**  
   GitHub Pages sirve proyectos en subdirectorios (`/PoliNoticias/`). Durante la compilación de producción se especificó el parámetro:
   ```bash
   npx ng build --base-href /PoliNoticias/
   ```
2. **Estrategia de Enrutamiento Hash (*HashLocationStrategy*):**  
   Para evitar el error 404 clásico de las SPAs al recargar páginas secundarias en servidores estáticos sin reescritura de URL, se configuró `withHashLocation()` en `src/app/app.config.ts`.
3. **Flujo de Publicación Automatizado (`deploy.ps1`):**  
   Se generó un script que compila la solución, copia `404.html`, crea `.nojekyll` y sube los artefactos compilados a la rama dedicada `gh-pages`, dejando el sitio activo en:
   **https://ndavvargas.github.io/PoliNoticias/**

---

## 9. GUÍA DE INSTALACIÓN Y EJECUCIÓN EN LOCAL

Para replicar el entorno de desarrollo en una máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ndavvargas/PoliNoticias.git
   cd PoliNoticias
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   ```
   Abrir en el navegador: `http://localhost:4200`.

4. **Compilar y redesplegar a producción (opcional):**
   ```bash
   npm run deploy
   ```

---

## 10. CONCLUSIONES

1. **Eficiencia y Modularidad con Standalone Components:** La adopción del modelo Standalone en Angular 18 permitió prescindir de los módulos convencionales, reduciendo la complejidad del código y acelerando los tiempos de compilación y carga.
2. **Reactividad Simplificada con Signals:** El uso de Signals en lugar de suscripciones complejas de RxJS demostró ser una solución limpia para sincronizar estados entre componentes distantes (como la marcación de favoritos y el contador del header).
3. **Persistencia Local Efectiva:** La integración de `localStorage` como capa de persistencia asegura que la experiencia del usuario sea continua, permitiendo evaluar el funcionamiento de las operaciones CRUD sin requerir una base de datos externa de backend.
4. **Despliegue Continuo en la Nube:** El uso de GitHub Pages junto a `HashLocationStrategy` resolvió con éxito las limitaciones típicas de alojamiento de aplicaciones de página única en servidores estáticos gratuitos, entregando un producto accesible globalmente con certificado SSL.

---

## 11. REFERENCIAS BIBLIOGRÁFICAS

- Angular Documentation. (2024). *Signals Overview and Architecture*. Google Developers. Recuperado de https://angular.dev/guide/signals
- Angular Documentation. (2024). *Standalone Components, Directives, and Pipes*. Google Developers. Recuperado de https://angular.dev/guide/components
- Bootstrap Team. (2024). *Bootstrap 5.3 Documentation: Grid system and components*. Bootstrap. Recuperado de https://getbootstrap.com/docs/5.3/
- Freeman, A. (2022). *Pro Angular 14: Best Practices in Modern Web Development* (6th ed.). Apress.
- Mozilla Developer Network [MDN]. (2024). *Window: localStorage property*. MDN Web Docs. Recuperado de https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
- TypeScript Documentation. (2024). *The TypeScript Handbook: Interfaces and Types*. Microsoft. Recuperado de https://www.typescriptlang.org/docs/handbook/intro.html
