import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function DatabaseSearch({
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
        d: "M21 11.693V5",
      }),
      jsx("path", {
        d: "m22 22-1.875-1.875",
      }),
      jsx("path", {
        d: "M3 12a9 3 0 0 0 8.697 2.998",
      }),
      jsx("path", {
        d: "M3 5v14a9 3 0 0 0 9.28 2.999",
      }),
      jsx("circle", {
        cx: "18",
        cy: "18",
        r: "3",
      }),
      jsx("ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3",
      }),
    ],
  });
}
