import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function generatePostImage({ title }: { title: string }) {
  return generateImage(
    <div
      style={{
        padding: 40,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(15, 23, 42)",
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
            src="https://github.com/isaias-alt.png"
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
    // Sin fuentes personalizadas - usa las del sistema
  });
}
