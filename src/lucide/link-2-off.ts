import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Link2Off({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M9 17H7A5 5 0 0 1 7 7",
      }),
      jsx("path", {
        d: "M15 7h2a5 5 0 0 1 4 8",
      }),
      jsx("line", {
        x1: "8",
        x2: "12",
        y1: "12",
        y2: "12",
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
