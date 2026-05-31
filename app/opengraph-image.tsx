import { ImageResponse } from "next/og";
import { yearsOfExperience } from "@/lib/yoe";

export const runtime = "edge";
export const alt =
  "Ajith Lal R — Engineering Manager & Technical Delivery Manager at PwC India, Chennai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const yoe = yearsOfExperience();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#1A1A1A",
          color: "#F4EFE6",
          padding: 64,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top tag row */}
        <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
          <div
            style={{
              background: "#C8FF00",
              color: "#1A1A1A",
              border: "4px solid #1A1A1A",
              padding: "8px 16px",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              boxShadow: "8px 8px 0 #1A1A1A",
            }}
          >
            ● Open for hires
          </div>
          <div
            style={{
              background: "#F4EFE6",
              color: "#1A1A1A",
              border: "4px solid #1A1A1A",
              padding: "8px 16px",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              boxShadow: "8px 8px 0 #1A1A1A",
            }}
          >
            Chennai · Remote
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 148,
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: -4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>AJITH</span>
          <span>LAL R.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 28,
            fontSize: 36,
            fontWeight: 600,
            color: "#F4EFE6",
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ background: "#C8334A", color: "#F4EFE6", padding: "4px 14px" }}>
            Engineering Manager
          </span>
          <span>·</span>
          <span style={{ background: "#C8FF00", color: "#1A1A1A", padding: "4px 14px" }}>
            Technical Delivery
          </span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 64,
            right: 64,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontWeight: 700 }}>
              {yoe}+ yrs · 20+ engineers led · PwC India
            </div>
            <div style={{ opacity: 0.75 }}>
              Next.js · React · AEM · Magento · Adobe Certified Expert
            </div>
          </div>
          <div
            style={{
              background: "#C8FF00",
              color: "#1A1A1A",
              border: "4px solid #1A1A1A",
              padding: "10px 18px",
              fontWeight: 800,
              letterSpacing: 2,
              boxShadow: "8px 8px 0 #C8334A",
            }}
          >
            ajithlalr.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
