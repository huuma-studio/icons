import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Frame({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        x1: "22",
        x2: "2",
        y1: "6",
        y2: "6",
      }),
      jsx("line", {
        x1: "22",
        x2: "2",
        y1: "18",
        y2: "18",
      }),
      jsx("line", {
        x1: "6",
        x2: "6",
        y1: "2",
        y2: "22",
      }),
      jsx("line", {
        x1: "18",
        x2: "18",
        y1: "2",
        y2: "22",
      }),
    ],
  });
}
