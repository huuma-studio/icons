import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Locate({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        x1: "2",
        x2: "5",
        y1: "12",
        y2: "12",
      }),
      jsx("line", {
        x1: "19",
        x2: "22",
        y1: "12",
        y2: "12",
      }),
      jsx("line", {
        x1: "12",
        x2: "12",
        y1: "2",
        y2: "5",
      }),
      jsx("line", {
        x1: "12",
        x2: "12",
        y1: "19",
        y2: "22",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "7",
      }),
    ],
  });
}
