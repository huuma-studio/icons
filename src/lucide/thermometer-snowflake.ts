import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ThermometerSnowflake({
  children: _,
  size = 24,
  ...props
}: IconProps): JSX.Element {
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
        d: "M10.585 15H10",
      }),
      jsx("path", {
        d: "M2 12h6.5L10 9",
      }),
      jsx("path", {
        d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z",
      }),
      jsx("path", {
        d: "m4 10 1.5 2L4 14",
      }),
      jsx("path", {
        d: "m7 21 3-6-1.5-3",
      }),
      jsx("path", {
        d: "m7 3 3 6h2",
      }),
    ],
  });
}
