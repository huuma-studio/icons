import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ZodiacCapricorn({
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
        d: "M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0",
      }),
      jsx("path", {
        d: "M7 19V6a3 3 0 0 0-3-3h0",
      }),
      jsx("circle", {
        cx: "17",
        cy: "17",
        r: "3",
      }),
    ],
  });
}
