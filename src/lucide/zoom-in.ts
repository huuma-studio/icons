import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ZoomIn({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        cx: "11",
        cy: "11",
        r: "8",
      }),
      jsx("line", {
        x1: "21",
        x2: "16.65",
        y1: "21",
        y2: "16.65",
      }),
      jsx("line", {
        x1: "11",
        x2: "11",
        y1: "8",
        y2: "14",
      }),
      jsx("line", {
        x1: "8",
        x2: "14",
        y1: "11",
        y2: "11",
      }),
    ],
  });
}
