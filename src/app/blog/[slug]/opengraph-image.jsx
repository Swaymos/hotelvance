import { ImageResponse } from "next/og";
import { getPost } from "../../lib/blog";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({ params }) {
  const post = await getPost(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0f172a",
          position: "relative",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#0f172a 100%)",
          }}
        />

        {/* Accent */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: "9999px",
            background: "#58AEBC",
            opacity: 0.15,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "70px",
            zIndex: 2,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 9999,
                background: "#58AEBC",
              }}
            />

            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
              }}
            >
              Hotevance
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                padding: "10px 20px",
                borderRadius: 9999,
                background: "#58AEBC22",
                color: "#58AEBC",
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              {post.category}
            </div>

            <div
              style={{
                fontSize: 60,
                lineHeight: 1.15,
                fontWeight: 800,
                maxWidth: 900,
              }}
            >
              {post.title}
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 28,
              color: "#cbd5e1",
            }}
          >
            <span>{post.readingTime}</span>

            <span>hotevance.com</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
