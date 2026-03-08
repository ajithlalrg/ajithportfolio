import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev City | Ajith Lal R - Interactive Portfolio Game",
  description:
    "Explore Ajith Lal R's engineering career as an open-world game. Navigate floating tech islands representing 9+ years of projects, skills, and leadership.",
  openGraph: {
    title: "Dev City | Ajith Lal R - Interactive Portfolio Game",
    description:
      "Explore a developer's career like an open-world game. Navigate floating tech islands, discover projects, and unlock achievements.",
  },
};

export default function DevCityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
