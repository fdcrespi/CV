# CV — Federico Crespi

CV personal, estático (HTML + CSS + vanilla JS). Desplegado en GitHub Pages.

## Stack
- HTML / CSS / JS (sin framework)
- Roboto Mono (local, variable)
- Light / dark mode con persistencia
- Versión impresa optimizada (2 páginas)

## Estructura

```
index.html              # CV completo en un archivo
assets/
  profile.jpg
  favicon.png / .ico
  iconSkills/           # Logos de tecnologías (PNG/WEBP)
  projects/             # Thumbnails de proyectos (WEBP)
fonts/
  RobotoMono-VariableFont_wght.ttf
.github/workflows/
  pages.yml             # Deploy automático a GitHub Pages
```

## Deploy

Cada push a `main` publica automáticamente a Pages.

URL: https://fdcrespi.github.io/CV/

## Desarrollo local

No hay build step. Abrí `index.html` en el navegador,
o levantá un server simple:

```bash
python3 -m http.server 8080
# o
npx serve .
```

## Imprimir

Ctrl/Cmd + P desde el navegador. Diseñado para 2 páginas A4.
