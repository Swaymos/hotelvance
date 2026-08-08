export const runtime = "nodejs";

import { ImageResponse } from "next/og";
import { getPost } from "../../../lib/blog";

export const alt = "Hotevance Blog Article";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function TwitterImage({ params }) {
  const { slug } = await params;

  const post = getPost(slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#020617",
            color: "#ffffff",
            fontSize: 52,
            fontWeight: 700,
          }}
        >
          Hotevance
        </div>
      ),
      {
        ...size,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
          color: "#ffffff",
        }}
      >
        {/* Brand */}

        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            color: "#58AEBC",
          }}
        >
          Hotevance
        </div>

        {/* Article */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1050px",
          }}
        >
          {post.category && (
            <div
              style={{
                display: "flex",
                marginBottom: "20px",
                fontSize: 22,
                fontWeight: 600,
                color: "#58AEBC",
              }}
            >
              {post.category}
            </div>
          )}

          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            {post.title}
          </div>

          {post.description && (
            <div
              style={{
                display: "flex",
                marginTop: "24px",
                maxWidth: "900px",
                fontSize: 24,
                lineHeight: 1.4,
                color: "#94a3b8",
              }}
            >
              {post.description}
            </div>
          )}
        </div>

        {/* Footer */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#64748b",
          }}
        >
          <div style={{ display: "flex" }}>Hotevance • Hotel Technology</div>

          {post.readingTime && (
            <div style={{ display: "flex" }}>{post.readingTime}</div>
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
