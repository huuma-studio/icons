import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Dices({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("rect", {
        width: "12",
        height: "12",
        x: "2",
        y: "10",
        rx: "2",
        ry: "2",
      }),
      jsx("path", {
        d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",
      }),
      jsx("path", {
        d: "M6 18h.01",
      }),
      jsx("path", {
        d: "M10 14h.01",
      }),
      jsx("path", {
        d: "M15 6h.01",
      }),
      jsx("path", {
        d: "M18 9h.01",
      }),
    ],
  });
}
