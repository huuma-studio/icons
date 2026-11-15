import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Navigation2Off({
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
        d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17",
      }),
      jsx("path", {
        d: "M14.53 8.88 12 2l-1.17 3.17",
      }),
      jsx("line", {
        x1: "2",
        x2: "22",
        y1: "2",
        y2: "22",
      }),
    ],
  });
}
