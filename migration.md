# migration.md — Portfolio reskin: template Magic UI → sistema "Concrete"

Documento de referencia único para la migración. Claude Code debe leer este
archivo completo antes de escribir código y consultarlo en cada tarea.

---

## 0. Contexto y objetivo

`lucasco.dev` corre hoy sobre el template `dillionverma/portfolio` (Magic UI),
atado a `DATA.resume` y a `magicui/blur-fade`, con layout `max-w-2xl`.

El objetivo NO es reestructurar el sitio. **La estructura y el orden de
secciones se mantienen.** Lo que cambia es la piel: tipografía, color,
espaciado, tratamiento de cada bloque, y la organización de los datos.

Referencia visual: `portfolio-v3.html` (adjunto). Es HTML/CSS estático y es la
**fuente de verdad del diseño**. Cuando haya duda sobre un espaciado, un
tamaño o un color, se mira ese archivo, no se improvisa.

Audiencia: reclutador técnico, escaneo rápido. Roles mid-level remotos,
mercado global. El sitio va en inglés.

---

## 1. Reglas duras

1. **No inventar contenido.** Si un dato no está en este documento, se deja el
   marcador `{{TODO: descripción}}` y se reporta al final de la tarea. Nunca
   escribir texto de relleno ni claims plausibles.
2. **No cambiar el orden ni el conjunto de secciones.** Son ocho, fijas
   (sección 3).
3. **Los bloqueantes de la sección 9 no se publican.** Ese contenido queda
   como marcador hasta que Lucas lo resuelva.
4. **Data centralizada.** Ningún string de contenido vive dentro de un
   componente. Todo sale de `src/data/resume.ts` (sección 5).
5. **Sin animaciones de scroll.** Se elimina `blur-fade` y todo reveal atado a
   scroll. Única animación permitida: un fade sobrio al montar la página
   (sección 7).
6. **shadcn se queda instalado**, pero sus tokens se remapean a Concrete
   (sección 4.3). No pueden coexistir dos paletas.
7. **TypeScript estricto.** Sin `any`. Todo el contenido tipado.
8. Trabajar en una rama: `feat/concrete-reskin`.

---

## 2. Stack

Se mantiene: Next.js 16 (App Router), TypeScript, Tailwind 3.4, shadcn/ui.

Se elimina:

- `framer-motion` y el componente `magicui/blur-fade` (y cualquier otro
  componente de Magic UI que quede sin uso tras la migración).
- Los tokens de color HSL neutrales heredados del template.
- `DATA.resume` en su forma actual (se reemplaza por `src/data/resume.ts`).

Se agrega: nada. Sin librerías nuevas.

---

## 3. Estructura de secciones (fija, en este orden)

| #   | Sección         | id            | Notas                                               |
| --- | --------------- | ------------- | --------------------------------------------------- |
| —   | Nav             | —             | Sticky, blur backdrop, borde inferior               |
| —   | Hero            | —             | Sin numeración de sección                           |
| 01  | Work Experience | `#experience` | Timeline; SODEP como empresa con proyectos anidados |
| 02  | Projects        | `#projects`   | 4 cards con screenshot                              |
| 03  | Education       | `#education`  | Dos filas                                           |
| 04  | Skills          | `#skills`     | Chips                                               |
| 05  | About           | `#about`      | Foto + dos párrafos                                 |
| 06  | Get in Touch    | `#contact`    | Grid de links                                       |
| —   | Footer          | —             | Nav interna                                         |

El label de sección es: índice mono en azul-acero + título Archivo 22px +
regla horizontal que ocupa el espacio restante. Ver `.sec-label` en el HTML.

---

## 4. Sistema de diseño "Concrete"

### 4.1 Color

| Token       | Hex       | Uso                                       |
| ----------- | --------- | ----------------------------------------- |
| `bg`        | `#0E1012` | Fondo. Casi-negro azulado, NO `#000`      |
| `surface`   | `#16191D` | Superficie sutil (chips de skills)        |
| `surface-2` | `#1A1E22` | Superficie de marcos de imagen y avatar   |
| `fog`       | `#8A9099` | Texto secundario, labels, fechas          |
| `bone`      | `#E8E6E1` | Texto principal. NO blanco puro           |
| `steel`     | `#5B7A99` | Acento azul-acero. Uso disciplinado (4.4) |
| `steel-dim` | `#3E5468` | Bordes de link, texto de placeholder      |
| `line`      | `#23282D` | Todos los bordes y reglas                 |

Dark-only. No hay light mode. No agregar toggle.

### 4.2 Definición en CSS

En `globals.css`, dentro de `@layer base`:

```css
:root {
  --bg: #0e1012;
  --surface: #16191d;
  --surface-2: #1a1e22;
  --fog: #8a9099;
  --bone: #e8e6e1;
  --steel: #5b7a99;
  --steel-dim: #3e5468;
  --line: #23282d;
}
```

Y exponerlos en `tailwind.config.ts` bajo `theme.extend.colors` como
`bg`, `surface`, `fog`, `bone`, `steel`, `line`, etc., referenciando las
variables con `var(--token)`.

### 4.3 Remapeo de shadcn (importante)

shadcn permanece instalado. Sus variables HSL por defecto deben ser
**reemplazadas** por los valores Concrete, para que cualquier componente
shadcn herede la piel:

| Variable shadcn          | Valor Concrete |
| ------------------------ | -------------- |
| `--background`           | `bg`           |
| `--foreground`           | `bone`         |
| `--card`                 | `surface`      |
| `--card-foreground`      | `bone`         |
| `--popover`              | `surface-2`    |
| `--popover-foreground`   | `bone`         |
| `--primary`              | `steel`        |
| `--primary-foreground`   | `bg`           |
| `--secondary`            | `surface-2`    |
| `--secondary-foreground` | `bone`         |
| `--muted`                | `surface`      |
| `--muted-foreground`     | `fog`          |
| `--accent`               | `surface-2`    |
| `--accent-foreground`    | `bone`         |
| `--border`               | `line`         |
| `--input`                | `line`         |
| `--ring`                 | `steel-dim`    |

Nota: shadcn espera valores HSL sin la función `hsl()`. Convertir cada hex a
ese formato al escribirlos. Verificar que ningún componente shadcn en uso
quede con contraste roto tras el remapeo.

### 4.4 Disciplina del acento

`steel` es el único color con carga. Aparece solo en:

- El saludo del hero ("Hey, I'm Lucas.")
- Los puntos del timeline y los bullets del hero-meta
- Los índices de sección (01, 02, ...)
- El tag de categoría de cada card de proyecto
- Bordes inferiores de links (`steel-dim`) y hover de contacto

No usarlo para fondos de bloque, botones grandes ni superficies amplias.

### 4.5 Tipografía

Vía `next/font/google`, con `display: 'swap'` y `variable`:

- **Archivo** (500-900): títulos, nombres, cifras. `letter-spacing: -0.03em`
  a `-0.04em`, `line-height` cercano a 1.
- **JetBrains Mono** (400-500): TODO lo que es dato. Fechas, stack, labels,
  índices, links de navegación, nombres de proyecto dentro del timeline,
  enlaces de contacto.
- **Inter** (400-500): body, párrafos, descripciones.

Cero serif. Nunca.

Escala de referencia (ver HTML para el detalle):

- Hero h1: `clamp(40px, 8vw, 72px)`, Archivo 800
- Título de sección: 22px, Archivo 700
- Nombre de proyecto: 21px, Archivo 700
- Body: 15-17px, Inter
- Datos mono: 11-14px

### 4.6 Layout

- Contenedor: `max-width: 780px`, padding horizontal 24px, centrado.
- Padding vertical de sección: `clamp(48px, 8vh, 80px)`.
- Hero: `clamp(72px, 14vh, 130px)` arriba.
- Bordes: 1px `line`. Radios: 2-4px máximo. Nada redondeado.
- Sin sombras. Sin gradientes. Sin glow.

---

## 5. Modelo de datos

Crear `src/data/resume.ts`. Todo el contenido vive acá, tipado. Los
componentes solo consumen.

```ts
export type Link = { label: string; href: string };

export type ExperienceProject = {
  name: string;
  description: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  intro?: string;
  projects?: ExperienceProject[];
};

export type Project = {
  name: string;
  year: string;
  tag: string;
  description: string;
  stack: string[];
  image: string; // ruta en /public
  links: Link[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
};

export type Resume = {
  name: string;
  greeting: string;
  headline: string; // puede contener un salto de línea
  summary: string;
  meta: string[]; // los tres badges del hero
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: string[];
  about: string[]; // un string por párrafo
  avatar: string;
  contact: Link[];
  social: Link[]; // footer
};
```

Exportar una única constante `resume: Resume`.

---

## 6. Contenido

Copiar textualmente. No reescribir, no "mejorar", no traducir.

### 6.1 Hero

- greeting: `Hey, I'm Lucas.`
- headline: `Software engineer.` / `I ship the whole thing.` (dos líneas)
- summary: `I work across the stack on **banking and fintech** products in
production, and I build and ship my own **SaaS** end to end. From the
database to the PDF the user downloads.`
  (Las palabras en negrita van en `bone`; el resto en `fog`.)
- meta: `Paraguay / Remote` · `4+ years` · `Open to mid-level roles`

### 6.2 Work Experience

**SODEP S.A. — Software Developer — Nov 2024 — Present**
intro: `Building production software for banking and fintech clients across
the stack.`

Proyectos anidados, en este orden:

1. `Aquí Pago — "Mi Tienda" module`
   Shipped a new Next.js module as a microfrontend inside an existing PHP app,
   with a shared session between both so users move between them without
   logging in again. Built stock management and payment collection.

2. `Banco Basa — Banking CRM`
   Client onboarding, account creation and card issuance. Built a Fastify proxy
   between the CRM and the bank's APIs that handles authentication and the
   encryption/decryption layer for requests and responses, and used Redis
   idempotency keys so critical onboarding flows are safe to retry.

3. `Banco Interfisa — Business Banking Web`
   Frontend for high-complexity business banking flows: loan payments, receipt
   history and supplier management. Delivered on the committed timeline.

**Independent — Fullstack Developer, Freelance — 2021 — 2024**
intro: `Web solutions for clients across different domains, under NDA. React,
Next.js and Node.js.`

### 6.3 Projects

Orden fijo: NutriOne, socratic-duck, Format-X, Creacionix AI.

**NutriOne** · 2024 — present · tag: `Clinical SaaS · built solo, end to end`
Patient records, anthropometric tracking, meal-plan builder and PDF export for
nutrition professionals. I own every layer: data model, API, interface,
deploy.
stack: Next.js, Nest.js, PostgreSQL, Prisma
links: Website → `https://nutrione.com.py` · Source → {{TODO: repo URL o privado}}

**socratic-duck** · 2025 · tag: `Claude Code skill · published`
An agent skill that pressure-tests architectural decisions before you commit to
them, through Socratic questioning, and writes a structured decision log.
stack: Claude Code, skills.sh
links: Source → `https://github.com/isaias-alt/skills`

**Format-X** · 2025 · tag: `Developer tool`
Convert between JSON, XML, YAML, CSV and plain text in the browser, with a
live editor.
stack: Next.js, Monaco, TypeScript
links: Demo → `https://format-your-x.vercel.app/` · Source →
`https://github.com/isaias-alt/format-x`

**Creacionix AI** · 2024 · tag: `Generative AI app`
Content generation from user input, built on the Gemini API.
stack: Next.js, Gemini, Drizzle
links: Demo → `https://creacionix-ai.vercel.app/` · Source →
`https://github.com/isaias-alt/creacionix-ai`

### 6.4 Education

- Universidad Católica Ntra. Sra. de la Asunción · Computer Engineering ·
  2019 — present
- Colegio Nacional "Prof. Luciano Bordón" · Computer Technician · 2016 — 2018

### 6.5 Skills

TypeScript, JavaScript, React, Next.js, Astro, Node.js, Nest.js, Fastify,
Express, PostgreSQL, Prisma, Redis, Tailwind CSS, Docker

### 6.6 About

Párrafo 1: `I got into programming in **2017**, building a 2D platformer with
two classmates that took **second place at a national contest**. That was the
moment it clicked: software could make things people actually want to use.`

Párrafo 2: `I took it seriously during the pandemic and haven't stopped since.
Outside the editor I'm self-taught in philosophy and pulled toward cinema. I
think about systems the way you'd think about a cut: get the structure right
first, then worry about the rhythm.`

Avatar: `{{TODO: Lucas debe proveer la imagen}}` en `/public/avatar.jpg`.

### 6.7 Get in Touch

Título: `Let's talk.`
Bajada: `Open to mid-level fullstack roles, remote. The fastest way to reach
me is a direct message.`

Links: LinkedIn (`lucascodev`), GitHub (`isaias-alt`), X (`@lucascodev`),
Email (`cascolucasisaias@gmail.com`).

### 6.8 Footer

`Lucas Casco · 2026` + nav interna: `/`, `/projects`, `/blog`.

---

## 7. Animación

Única animación permitida: un fade de entrada al montar la página. CSS puro,
sin librerías.

- Opacidad 0 → 1, `duration: 400ms`, `ease-out`.
- Puede incluir un desplazamiento vertical de 8px máximo.
- Se aplica una vez, al cargar. **No atado a scroll.**
- Respetar `prefers-reduced-motion: reduce` desactivándola por completo.

No hay reveals por sección, ni stagger, ni parallax, ni hover animations más
allá de transiciones de color de 150-200ms en links.

---

## 8. Imágenes

- Cuatro screenshots de proyecto en `/public/projects/`: `nutrione.png`,
  `socratic-duck.png`, `format-x.png`, `creacionix.png`.
- **Lucas todavía no las proveyó.** Hasta que lleguen, renderizar el marco
  vacío con el mismo tratamiento del HTML de referencia (fondo `surface-2`,
  borde `line`, aspect-ratio 16/10, texto mono en `steel-dim`).
- Cuando existan: usar `next/image` con `width`/`height` explícitos y `alt`
  descriptivo. Nunca `<img>`.
- El avatar del About: mismo criterio, `/public/avatar.jpg`.

---

## 9. Decisiones de contenido (resueltas)

Los cuatro puntos que antes estaban abiertos ya fueron decididos por Lucas y
están reflejados en la sección 6. Se documentan acá para trazabilidad.

**Banco Basa — encriptación.** Confirmado y defendible. Lucas implementó la
capa proxy en Fastify que cifra los requests salientes y descifra los
responses entrantes (el algoritmo lo definía el banco, no lo diseñó Lucas). El
texto de 6.2 dice "handles authentication and the encryption/decryption layer",
no "designed encryption". Redacción final, no tocar.

**NutriOne — sin cifra de pacientes.** NutriOne ya no tiene usuarios en
producción y el CV nuevo no reporta número. La card se apoya en autoría
completa end-to-end, sin métrica de uso. No agregar cifras.

**NutriOne — links.** Website → `https://nutrione.com.py` (landing de
producto) y Source. Único TODO restante: la URL del repo, o marcar el repo
como privado si no es público.

**socratic-duck — descripción.** Aprobada, ya en 6.3. Redacción final.

Único marcador `{{TODO}}` vivo en contenido: la URL del repo de NutriOne
(6.3) y los assets de imagen (sección 8). Todo lo demás está cerrado.

---

## 10. Plan de tareas

Ejecutar en orden. Al terminar cada tarea, detenerse, reportar y esperar
revisión antes de seguir. No encadenar tareas sin confirmación.

**T1 — Setup.**
Rama `feat/concrete-reskin`. Fuentes vía `next/font/google`. Tokens Concrete
en `globals.css` + `tailwind.config.ts`. Remapeo de shadcn (4.3). Eliminar
`framer-motion`, `blur-fade` y Magic UI sin uso. Verificar que la app
compile y que ningún componente shadcn quede con contraste roto.

**T2 — Data.**
Crear `src/data/resume.ts` con los tipos de la sección 5 y el contenido de la
sección 6, incluidos los marcadores de los bloqueantes. Eliminar
`DATA.resume`.

**T3 — Layout base.**
Contenedor 780px, nav sticky con blur, footer, fade de entrada (sección 7),
componente reutilizable de label de sección.

**T4 — Hero + Work Experience.**
Timeline con línea vertical, punto `steel`, empresa arriba y proyectos
anidados con su propio borde izquierdo.

**T5 — Projects.**
Grid de cards con marco de imagen a la izquierda (200px en desktop), stack en
chips, links mono. Colapsa a una columna por debajo de 640px.

**T6 — Education, Skills, About, Contact.**

**T7 — Verificación.**
Responsive en 375 / 768 / 1280. Contraste AA en todo el texto. Lighthouse:
performance y accesibilidad por encima de 95. Sin errores de consola. Sin
`any` en el código. Confirmar que ningún marcador `{{TODO}}` quedó fuera del
reporte final.

---

## 11. Criterios de aceptación

- Las ocho secciones, en el orden de la sección 3.
- Ningún string de contenido dentro de un componente.
- Ninguna dependencia nueva. `framer-motion` fuera del `package.json`.
- Ninguna animación atada a scroll.
- Una sola paleta: sin restos de los HSL neutrales del template.
- Único `{{TODO}}` de contenido admitido: URL del repo de NutriOne y los
  assets de imagen. Cualquier otro marcador se reporta.
- El resultado es fiel a `portfolio-v3.html` en tipografía, color, espaciado
  y jerarquía.
