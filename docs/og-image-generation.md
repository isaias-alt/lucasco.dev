# Generación de OG images (histórico, Next.js)

**Contexto:** este repo (`lucasco.dev`) tenía generación automática de imágenes
Open Graph para el home y cada post del blog, usando `next/og`. Se eliminó al
sacar la ruta `/blog` del sitio durante el reskin "Concrete" (commit
`6ed4447`), porque el blog ahora vive en `blog.lucasco.dev`, un proyecto
**Astro** aparte (ver `decisions/2026-05-16-blog-framework.md`).

Este documento registra cómo funcionaba, como referencia para reimplementarlo
en el repo del blog. El código de abajo usa `next/og` (`ImageResponse`), que
es específico de Next.js — en Astro el equivalente es `@vercel/og` como
endpoint, o la librería `astro-og-canvas`.

## Estructura original

- `src/og/generateImage.tsx` — lógica compartida de generación (tamaño,
  content-type, dos variantes de imagen).
- `src/app/opengraph-image.tsx` — OG image del home, resuelto por convención
  de Next.js App Router.
- `src/app/blog/[slug]/opengraph-image.tsx` — OG image por post, leía el
  título del post vía `getPost(slug)` (`src/data/blog.ts`).

## `generateImage.tsx` (versión completa, con fonts custom)

```tsx
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function generateHomeImage() {
  return generateImage(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(15, 23, 42)", // slate-900
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 120,
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 60,
        }}
      >
        <span
          style={{
            backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          lucasco.dev
        </span>
        <span
          style={{
            fontFamily: "Inter",
            fontSize: 48,
            alignItems: "center",
            display: "flex",
            gap: 20,
          }}
        >
          by
          <img
            alt="Lucas Casco"
            src="https://lucasco.dev/me.webp"
            style={{
              height: 100,
              width: 100,
              borderRadius: "50%",
              marginLeft: 10,
            }}
          />
        </span>
      </div>
    </div>
  );
}

export async function generatePostImage({ title }: { title: string }) {
  return generateImage(
    <div
      style={{
        padding: 40,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(15, 23, 42)", // slate-900
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 40,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 40,
        }}
      >
        <span
          style={{
            backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: 48,
            fontWeight: 700,
          }}
        >
          lucasco.dev
        </span>
        <span
          style={{
            fontFamily: "Inter",
            fontSize: 28,
            alignItems: "center",
            display: "flex",
            gap: 15,
          }}
        >
          by
          <img
            alt="Lucas Casco"
            src="https://lucasco.dev/me.webp"
            style={{
              height: 60,
              width: 60,
              borderRadius: "50%",
              marginLeft: 5,
            }}
          />
        </span>
      </div>
      <div
        style={{
          fontSize: 72,
          display: "flex",
          alignItems: "center",
          flex: 1,
          paddingBottom: 30,
          lineHeight: 1.1,
          fontWeight: 600,
        }}
      >
        {title}
      </div>
    </div>
  );
}

async function generateImage(jsx: React.ReactElement) {
  return new ImageResponse(jsx, {
    ...size,
    fonts: [
      {
        name: "Inter",
        data: await interSemiBold,
        style: "normal",
        weight: 600,
      },
      {
        name: "Inter",
        data: await interBold,
        style: "normal",
        weight: 700,
      },
    ],
  });
}

const interSemiBold = readFile(join(process.cwd(), "og/Inter-SemiBold.ttf"));
const interBold = readFile(join(process.cwd(), "og/Inter-Bold.ttf"));
```

Las fuentes (`Inter-SemiBold.ttf`, `Inter-Bold.ttf`) vivían en `src/og/` y se
leían del filesystem en build time. Se retiraron después (commit `3342412`,
"refactor: remove unused font loading for Inter in image generation") porque
`next/og` cae a una fuente del sistema si no se registra una custom, y no
justificaba el peso de los `.ttf` en el repo. La versión final (última antes
de borrarse, ver `git show 6ed4447~1:src/og/generateImage.tsx`) solo generaba
la imagen de posts (`generatePostImage`), sin fonts custom ni imagen de home,
y con fondo `rgb(10, 20, 46)` y avatar desde `https://github.com/isaias-alt.png`.

## Consumidores (rutas Next.js, por convención App Router)

```tsx
// src/app/opengraph-image.tsx — home
import { size, contentType, generateHomeImage } from "../og/generateImage";

export const dynamic = "force-static";
export const alt = "Lucas Casco - Software Developer";
export { size, contentType };

export default async function Image() {
  return generateHomeImage();
}
```

```tsx
// src/app/blog/[slug]/opengraph-image.tsx — por post
import { getPost } from "@/data/blog";
import { size, contentType, generatePostImage } from "@/og/generateImage";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const alt = "Lucas Casco - Blog Post";
export { size, contentType };

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await Promise.resolve(params);
  if (!slug) return notFound();

  const post = await getPost(slug);
  if (!post) return notFound();

  return generatePostImage({ title: post.metadata.title });
}
```

## Para reimplementar en blog.lucasco.dev (Astro)

Puntos a resolver, no una receta lista:

- **Runtime:** `next/og`'s `ImageResponse` no existe en Astro. Usar
  `@vercel/og` directamente en un endpoint (`src/pages/og/[slug].png.ts`) o
  `astro-og-canvas` (más simple si no hace falta JSX/flexbox layout).
- **Contenido dinámico:** el título viene de las Content Collections
  (`getEntry`/`getCollection`), no de `getPost` (eso era del `src/data/blog.ts`
  de este repo, que ya no existe).
- **Branding:** decidir si se retoma la paleta vieja (slate-900 + gradiente
  azul/violeta) o se alinea al sistema "Concrete" de este portfolio
  (`--bg #0e1012`, `--steel #6284a5`, fuente Archivo/JetBrains Mono) para
  consistencia visual entre lucasco.dev y blog.lucasco.dev.
- **Avatar:** la última versión usaba el avatar de GitHub por URL remota; hay
  una copia local en `public/me.webp` de este repo si conviene usar esa en su
  lugar.
