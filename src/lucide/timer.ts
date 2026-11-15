import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Timer({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("line", {
        x1: "10",
        x2: "14",
        y1: "2",
        y2: "2",
      }),
      jsx("line", {
        x1: "12",
        x2: "15",
        y1: "14",
        y2: "11",
      }),
      jsx("circle", {
        cx: "12",
        cy: "14",
        r: "8",
      }),
    ],
  });
}
