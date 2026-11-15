import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SolarPanel({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M11 2h2",
      }),
      jsx("path", {
        d: "m14.28 14-4.56 8",
      }),
      jsx("path", {
        d: "m21 22-1.558-4H4.558",
      }),
      jsx("path", {
        d: "M3 10v2",
      }),
      jsx("path", {
        d: "M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z",
      }),
      jsx("path", {
        d: "M7 2a4 4 0 0 1-4 4",
      }),
      jsx("path", {
        d: "m8.66 7.66 1.41 1.41",
      }),
    ],
  });
}
