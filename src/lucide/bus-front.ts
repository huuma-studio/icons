import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BusFront({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M4 6 2 7",
      }),
      jsx("path", {
        d: "M10 6h4",
      }),
      jsx("path", {
        d: "m22 7-2-1",
      }),
      jsx("rect", {
        width: "16",
        height: "16",
        x: "4",
        y: "3",
        rx: "2",
      }),
      jsx("path", {
        d: "M4 11h16",
      }),
      jsx("path", {
        d: "M8 15h.01",
      }),
      jsx("path", {
        d: "M16 15h.01",
      }),
      jsx("path", {
        d: "M6 19v2",
      }),
      jsx("path", {
        d: "M18 21v-2",
      }),
    ],
  });
}
