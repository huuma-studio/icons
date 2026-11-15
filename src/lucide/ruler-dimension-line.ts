import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function RulerDimensionLine({
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
        d: "M10 15v-3",
      }),
      jsx("path", {
        d: "M14 15v-3",
      }),
      jsx("path", {
        d: "M18 15v-3",
      }),
      jsx("path", {
        d: "M2 8V4",
      }),
      jsx("path", {
        d: "M22 6H2",
      }),
      jsx("path", {
        d: "M22 8V4",
      }),
      jsx("path", {
        d: "M6 15v-3",
      }),
      jsx("rect", {
        x: "2",
        y: "12",
        width: "20",
        height: "8",
        rx: "2",
      }),
    ],
  });
}
