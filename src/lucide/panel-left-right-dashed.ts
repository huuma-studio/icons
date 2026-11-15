import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function PanelLeftRightDashed({
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
        d: "M15 10V9",
      }),
      jsx("path", {
        d: "M15 15v-1",
      }),
      jsx("path", {
        d: "M15 21v-2",
      }),
      jsx("path", {
        d: "M15 5V3",
      }),
      jsx("path", {
        d: "M9 10V9",
      }),
      jsx("path", {
        d: "M9 15v-1",
      }),
      jsx("path", {
        d: "M9 21v-2",
      }),
      jsx("path", {
        d: "M9 5V3",
      }),
      jsx("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
      }),
    ],
  });
}
