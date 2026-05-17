import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#C8334A",
          color: "#F4EFE6",
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: 300,
          letterSpacing: -10,
        }}
      >
        AL
      </div>
    ),
    { width: 512, height: 512 },
  );
}
