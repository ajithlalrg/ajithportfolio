"use client";

import dynamic from "next/dynamic";

const DevCityGame = dynamic(
  () => import("@/components/game/DevCityGame"),
  { ssr: false }
);

export default function DevCityPage() {
  return <DevCityGame />;
}
