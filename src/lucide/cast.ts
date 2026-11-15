import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Cast({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",
      }),
      jsx("path", {
        d: "M2 12a9 9 0 0 1 8 8",
      }),
      jsx("path", {
        d: "M2 16a5 5 0 0 1 4 4",
      }),
      jsx("line", {
        x1: "2",
        x2: "2.01",
        y1: "20",
        y2: "20",
      }),
    ],
  });
}
