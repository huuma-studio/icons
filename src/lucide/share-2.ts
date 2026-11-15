import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Share2({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        cx: "18",
        cy: "5",
        r: "3",
      }),
      jsx("circle", {
        cx: "6",
        cy: "12",
        r: "3",
      }),
      jsx("circle", {
        cx: "18",
        cy: "19",
        r: "3",
      }),
      jsx("line", {
        x1: "8.59",
        x2: "15.42",
        y1: "13.51",
        y2: "17.49",
      }),
      jsx("line", {
        x1: "15.41",
        x2: "8.59",
        y1: "6.51",
        y2: "10.49",
      }),
    ],
  });
}
