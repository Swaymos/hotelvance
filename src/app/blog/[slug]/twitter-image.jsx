import { ImageResponse } from "next/og";
import { getPost } from "../../lib/blog";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default async function TwitterImage({ params }) {
  const post = await getPost(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#020617",
          color: "#ffffff",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg,#020617 0%,#0f172a 50%,#1e293b 100%)",
          }}
        />

        {/* Decorative Circles */}
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 420,
            height: 420,
            borderRadius: "9999px",
            background: "#58AEBC",
            opacity: 0.12,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: -100,
            bottom: -100,
            width: 300,
            height: 300,
            borderRadius: "9999px",
            background: "#58AEBC",
            opacity: 0.08,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "60px",
            zIndex: 2,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "9999px",
                  background: "#58AEBC",
                }}
              />

              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                }}
              >
                Hotevance
              </div>
            </div>

            <div
              style={{
                display: "flex",
                background: "rgba(88,174,188,.12)",
                color: "#58AEBC",
                padding: "10px 22px",
                borderRadius: "9999px",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {post.category}
            </div>
          </div>

          {/* Main */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <div
              style={{
                fontSize: 58,
                lineHeight: 1.15,
                fontWeight: 800,
                maxWidth: "900px",
              }}
            >
              {post.title}
            </div>

            <div
              style={{
                fontSize: 24,
                color: "#CBD5E1",
                lineHeight: 1.5,
                maxWidth: "850px",
              }}
            >
              {post.description}
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(255,255,255,.12)",
              paddingTop: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 28,
                fontSize: 22,
                color: "#CBD5E1",
              }}
            >
              <span>{post.readingTime}</span>
              <span>{post.date}</span>
            </div>

            <div
              style={{
                fontSize: 22,
                color: "#58AEBC",
                fontWeight: 700,
              }}
            >
              hotevance.com
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
