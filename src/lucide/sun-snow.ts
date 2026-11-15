import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SunSnow({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10 21v-1",
      }),
      jsx("path", {
        d: "M10 4V3",
      }),
      jsx("path", {
        d: "M10 9a3 3 0 0 0 0 6",
      }),
      jsx("path", {
        d: "m14 20 1.25-2.5L18 18",
      }),
      jsx("path", {
        d: "m14 4 1.25 2.5L18 6",
      }),
      jsx("path", {
        d: "m17 21-3-6 1.5-3H22",
      }),
      jsx("path", {
        d: "m17 3-3 6 1.5 3",
      }),
      jsx("path", {
        d: "M2 12h1",
      }),
      jsx("path", {
        d: "m20 10-1.5 2 1.5 2",
      }),
      jsx("path", {
        d: "m3.64 18.36.7-.7",
      }),
      jsx("path", {
        d: "m4.34 6.34-.7-.7",
      }),
    ],
  });
}
