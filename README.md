# Ingrid Solís — Bioneuroemoción

Landing estática (HTML + CSS + JS, sin build) para Ingrid Solís, coach en
Bioneuroemoción. Sesiones individuales, online y presenciales en Vicente López.

## Ver en local

```bash
cd ~/ingrid-solis-web
python3 -m http.server 5182
# http://localhost:5182
```

## Estructura

- `index.html` — página única.
- `assets/css/styles.css` — estilos (paleta verde bosque + hueso + ámbar).
- `assets/js/main.js` — reveal al scroll + estado sticky del nav.
- `assets/img/` — imágenes (placeholders tratados por ahora).
- `vercel.json` — headers de caché (immutable solo para `/assets/img`).

## Conversión

- Botón flotante de WhatsApp + todos los CTA apuntan a:
  `https://api.whatsapp.com/send?phone=+541141927838&text=Hola%20Ingrid.%20Obtuve%20tu%20whatsapp%20de%20tu%20website.%20Mi%20nombre%20es:`
- Mail: `solisingrid80@hotmail.com`
- Instagram: `https://www.instagram.com/ingridsoliscoach/`

## Pendientes (reemplazar antes de dar por final)

| Lugar | Archivo | Qué va |
|---|---|---|
| Hero | `assets/img/hero.jpg` (1200×1500) | Foto real de Ingrid o imagen cálida de su feed |
| Sección "Qué es" | `assets/img/metodo.jpg` (1200×1500) | Imagen cálida (manos, naturaleza, luz) del feed |
| Sección "Sobre mí" | `assets/img/ingrid.jpg` (1200×1500) | **Retrato real de Ingrid** |
| OG / redes | `assets/img/og-cover.jpg` (1200×630) | Opcional: reemplazar por una con foto real |
| Testimonios | `index.html` sección `.quotes` | 3 testimonios reales con permiso (hoy son de ejemplo) |
| Datos a confirmar | `index.html` | Duración real de la sesión (hoy dice "alrededor de una hora"), si hay dirección/zona presencial para mostrar |
| Formación | sección "Sobre mí" | Si Ingrid quiere nombrar instituto/certificación concreta (Enric Corbera u otro) |

Al cambiar CSS o JS mientras se itera, subir el `?v=N` en `index.html`.

## Deploy

Repo GitHub `fernanditoariel/ingrid-solis-web` → Vercel (team `coachfernando`),
auto-deploy en cada push a `main`. Live: `ingrid-solis-web.vercel.app`.
