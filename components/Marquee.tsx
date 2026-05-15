"use client";

import { ReactNode } from "react";

type Props = {
  items: ReactNode[];
  className?: string;
  reverse?: boolean;
  slow?: boolean;
  separator?: ReactNode;
};

export default function Marquee({
  items,
  className = "",
  reverse = false,
  slow = false,
  separator,
}: Props) {
  const sep = separator ?? <span aria-hidden className="mx-6 opacity-80">★</span>;
  const row = (
    <div className="flex shrink-0 items-center gap-0 pr-0">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap">{item}</span>
          {sep}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${slow ? "marquee-track-slow" : "marquee-track"} ${
          reverse ? "marquee-reverse" : ""
        }`}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
