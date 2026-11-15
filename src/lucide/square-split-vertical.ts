import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SquareSplitVertical({
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
        d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",
      }),
      jsx("path", {
        d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",
      }),
      jsx("line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
      }),
    ],
  });
}
