import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Snowflake({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m10 20-1.25-2.5L6 18",
      }),
      jsx("path", {
        d: "M10 4 8.75 6.5 6 6",
      }),
      jsx("path", {
        d: "m14 20 1.25-2.5L18 18",
      }),
      jsx("path", {
        d: "m14 4 1.25 2.5L18 6",
      }),
      jsx("path", {
        d: "m17 21-3-6h-4",
      }),
      jsx("path", {
        d: "m17 3-3 6 1.5 3",
      }),
      jsx("path", {
        d: "M2 12h6.5L10 9",
      }),
      jsx("path", {
        d: "m20 10-1.5 2 1.5 2",
      }),
      jsx("path", {
        d: "M22 12h-6.5L14 15",
      }),
      jsx("path", {
        d: "m4 10 1.5 2L4 14",
      }),
      jsx("path", {
        d: "m7 21 3-6-1.5-3",
      }),
      jsx("path", {
        d: "m7 3 3 6h4",
      }),
    ],
  });
}
