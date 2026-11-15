import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Currency({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        cx: "12",
        cy: "12",
        r: "8",
      }),
      jsx("line", {
        x1: "3",
        x2: "6",
        y1: "3",
        y2: "6",
      }),
      jsx("line", {
        x1: "21",
        x2: "18",
        y1: "3",
        y2: "6",
      }),
      jsx("line", {
        x1: "3",
        x2: "6",
        y1: "21",
        y2: "18",
      }),
      jsx("line", {
        x1: "21",
        x2: "18",
        y1: "21",
        y2: "18",
      }),
    ],
  });
}
