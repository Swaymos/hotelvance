// src/app/blog/[slug]/opengraph-image.jsx

export const runtime = "nodejs";

import { ImageResponse } from "next/og";
import { getPost } from "../../../lib/blog";

export const alt = "Hotevance Blog Article";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({ params }) {
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
            fontSize: 48,
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
            alignItems: "center",
            fontSize: 30,
            fontWeight: 700,
            color: "#58AEBC",
          }}
        >
          Hotevance
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1000px",
          }}
        >
          {/* Category */}
          {post.category && (
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 600,
                color: "#58AEBC",
                marginBottom: "22px",
              }}
            >
              {post.category}
            </div>
          )}

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            {post.title}
          </div>

          {/* Description */}
          {post.description && (
            <div
              style={{
                display: "flex",
                marginTop: "24px",
                fontSize: 24,
                lineHeight: 1.4,
                color: "#94a3b8",
                maxWidth: "900px",
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
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#64748b",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            Hotel Technology • Hotevance
          </div>

          {post.readingTime && (
            <div
              style={{
                display: "flex",
              }}
            >
              {post.readingTime}
            </div>
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
