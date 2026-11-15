import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function AlignEndHorizontal({
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
      jsx("rect", {
        width: "6",
        height: "16",
        x: "4",
        y: "2",
        rx: "2",
      }),
      jsx("rect", {
        width: "6",
        height: "9",
        x: "14",
        y: "9",
        rx: "2",
      }),
      jsx("path", {
        d: "M22 22H2",
      }),
    ],
  });
}
