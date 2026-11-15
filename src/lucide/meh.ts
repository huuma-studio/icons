import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Meh({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        r: "10",
      }),
      jsx("line", {
        x1: "8",
        x2: "16",
        y1: "15",
        y2: "15",
      }),
      jsx("line", {
        x1: "9",
        x2: "9.01",
        y1: "9",
        y2: "9",
      }),
      jsx("line", {
        x1: "15",
        x2: "15.01",
        y1: "9",
        y2: "9",
      }),
    ],
  });
}
