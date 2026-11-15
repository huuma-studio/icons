import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Dna({ children: _, size = 24, ...props }: IconProps): JSX.Element {
  return jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: `${size}`,
    height: `${size}`,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    ...props,
    children: [
      jsx("path", {
        d: "m10 16 1.5 1.5",
      }),
      jsx("path", {
        d: "m14 8-1.5-1.5",
      }),
      jsx("path", {
        d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",
      }),
      jsx("path", {
        d: "m16.5 10.5 1 1",
      }),
      jsx("path", {
        d: "m17 6-2.891-2.891",
      }),
      jsx("path", {
        d: "M2 15c6.667-6 13.333 0 20-6",
      }),
      jsx("path", {
        d: "m20 9 .891.891",
      }),
      jsx("path", {
        d: "M3.109 14.109 4 15",
      }),
      jsx("path", {
        d: "m6.5 12.5 1 1",
      }),
      jsx("path", {
        d: "m7 18 2.891 2.891",
      }),
      jsx("path", {
        d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993",
      }),
    ],
  });
}
