
# En‑construccion‑web

## Descripción
Este repositorio contiene una página temporal de tipo "En construcción", desarrollada con **Astro**. Está diseñada para informar a los visitantes de que el sitio web definitivo se encuentra en desarrollo.  
La plantilla base utilizada corresponde al **Astro Starter Kit: Basics**.

## Requisitos
- Node.js v16 o superior (recomendado v18+)
- npm
- (Opcional) Docker y Docker Compose

## Instalación y uso

### Clonar el repositorio
```bash
git clone https://github.com/propstgonz/En-construccion-web.git
cd En-construccion-web
```

### Instalación de dependencias
```bash
npm install
```

### Ejecución en modo desarrollo
```bash
npm run dev
```
El servidor se iniciará por defecto en `http://localhost:4321`.

### Generar versión de producción
```bash
npm run build
npm run preview
```

### Ejecución mediante Docker
El repositorio incluye un `Dockerfile` y un archivo de ejemplo `docker-compose.yml-example`.
```bash
docker-compose -f docker-compose.yml-example up --build
```

## Estructura del proyecto
```
.
├── .vscode/                     # Configuración para Visual Studio Code
├── public/                      # Archivos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── assets/                  # Recursos gráficos
│   ├── components/              # Componentes reutilizables
│   ├── layouts/                 # Plantillas de diseño
│   └── pages/                   # Páginas del sitio
│   └── scripts/                 # Scripts
├── astro.config.mjs             # Configuración de Astro
├── package.json                 # Dependencias y scripts
├── tsconfig.json                # Configuración TypeScript
├── Dockerfile
├── docker-compose.yml-example
└── README.md
```

## Archivos principales
- `src/pages/index.astro`: Página principal con el mensaje de "En construcción".
- `src/layouts/Layout.astro`: Plantilla base para las páginas.
- `public/favicon.svg`: Icono por defecto del sitio.
- `Dockerfile` y `docker-compose.yml-example`: Archivos para ejecución en contenedores.

## Tecnologías utilizadas
- Astro
- HTML
- CSS
- (Opcional) TypeScript
- Docker

## Autor
**propstgonz**  
Repositorio: [https://github.com/propstgonz/En-construccion-web](https://github.com/propstgonz/En-construccion-web)
