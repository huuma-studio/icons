import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ZodiacScorpio({
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
        d: "M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3",
      }),
      jsx("path", {
        d: "m22 19-3 3",
      }),
      jsx("path", {
        d: "M5 19V5.5a1 1 0 0 1 5 0",
      }),
      jsx("path", {
        d: "M5 5.5A2.5 2.5 0 0 0 2.5 3",
      }),
    ],
  });
}
