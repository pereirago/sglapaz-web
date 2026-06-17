# BITÁCORA DE PROYECTO: SERVICIOS GENERALES LA PAZ (SGLP)

Esta bitácora documenta la aplicación práctica de la arquitectura web de élite en el proyecto comercial "Servicios Generales La Paz, C.A.".

### Fases Completadas (Junio 2026)
1. **Discovery & UX Strategy:** Análisis de la documentación física/digital de la empresa para extraer paleta de colores (Azul corporativo #1B3A8C y Dorado), logotipo oficial y catálogo de servicios (6 líneas).
2. **Desarrollo Frontend (One-Page App):** Construcción en HTML5/CSS3/VanillaJS priorizando un rendimiento extremo (Core Web Vitals) y compatibilidad total, sin dependencias pesadas.
3. **Optimización UI/UX:** Implementación de micro-animaciones (Intersection Observer), cabecera adaptativa, y diseño completamente responsive (Mobile-First).
4. **Integración Funcional:** Formulario de cotización conectado a **Netlify Forms** (vía AJAX) para captura de leads sin recarga de página, y botón flotante de WhatsApp.
5. **Ajustes de Élite:** 
   - Transición de un carrusel tradicional a una **Galería Moderna Interactiva** (Masonry Grid en Desktop / Swipeable Slider en Mobile) para optimizar el rendimiento y la experiencia del usuario.
   - Inserción de favicon (`icono_SGLP.png`) para identidad en pestaña.
6. **Despliegue & Negocio:** Publicación de la [Demo en Netlify](https://sglapaz-web.netlify.app/) y redacción técnica de la Oferta Comercial en formato `.doc`.
7. **Feedback del Cliente e Integración Visual (16/06/2026):**
   - Se incorporó la información de contacto de **Julio Marcano** (`j.marcano@sglapaz.com` y `+58 4148157474`) en el sitio.
   - Se recibieron 7 imágenes nuevas por parte del cliente, pero se diagnosticó que no cumplen con los estándares de calidad web (resoluciones de 285px, orientaciones inconsistentes, uso de collages pre-hechos).
   - Se integraron temporalmente en el sitio web aplicando ajustes dinámicos de CSS (`style.css`), creando clases específicas (`gallery-sm`, `gallery-square`) y utilizando `object-fit: contain` para evitar recortes y mantener la integridad de los collages actuales.
   - **Gestión Técnica del Cliente:** Se redactó y exportó la "Guía Rápida de Fotografías" en formato `.docx` (simplificada, sin terminología técnica) para que el cliente la entienda y pueda proveer el material definitivo de forma correcta.
8. **Auditoría de Rendimiento y Resolución Crítica de Despliegue (17/06/2026):**
   - **Incidente:** Falla en la visualización de la demo en Netlify (Timeouts y rotura crítica del LCP).
   - **Diagnóstico:** Se detectó la inyección a Git de recursos gráficos masivos sin optimizar (ej. `maquinaria_pesada.png` con 33.5 MB), totalizando ~40MB. Esto violaba flagrantemente los estándares de Core Web Vitals, colapsando el ancho de banda del cliente y el pipeline de *Asset Optimization* de Netlify.
   - **Resolución Proactiva:** Se codificó y ejecutó un pipeline de automatización en Python (`optimize.py`) para resampleo (filtro Lanczos) y conversión algorítmica masiva a `WebP`.
   - **Resultados:** Reducción del peso consolidado de activos visuales en más de un **99%** (ej. de 33.5 MB a 141 KB). Refactorización del DOM (`index.html`) para soportar los nuevos formatos modernos. Despliegue estabilizado y métricas saneadas.

### Estado Actual: EN ESPERA (Hold) — Última actividad: 17/06/2026
El sitio se adaptó para mostrar correctamente el material temporal, pero se requiere material de calidad para el despliegue a producción. Se ha pausado el avance técnico a la espera de acciones del cliente. Estamos a la espera de:
- **Nuevo Material Visual:** Recepción de las 7 fotografías definitivas individuales y en alta resolución, siguiendo la guía entregada a la gerencia de SGLP.
- **Aprobación Comercial:** Aceptación formal de la propuesta comercial por parte de la empresa.

### Siguientes Pasos (Pendientes)
1. Recibir, auditar y optimizar (compresión a WebP/AVIF) el lote definitivo de fotografías enviadas por el cliente.
2. Retirar los "parches" CSS de la galería si las nuevas imágenes cumplen con los estándares de proporción y resolución.
3. Incorporar cualquier corrección o feedback final de contenido.
4. Adquisición y vinculación del dominio oficial (`sglapaz.com`).
5. Redespliegue final a producción en Netlify y entrega del proyecto.
