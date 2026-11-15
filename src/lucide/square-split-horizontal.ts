import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SquareSplitHorizontal({
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
        d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",
      }),
      jsx("path", {
        d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",
      }),
      jsx("line", {
        x1: "12",
        x2: "12",
        y1: "4",
        y2: "20",
      }),
    ],
  });
}
