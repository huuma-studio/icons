import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Spline({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("circle", {
        cx: "19",
        cy: "5",
        r: "2",
      }),
      jsx("circle", {
        cx: "5",
        cy: "19",
        r: "2",
      }),
      jsx("path", {
        d: "M5 17A12 12 0 0 1 17 5",
      }),
    ],
  });
}
