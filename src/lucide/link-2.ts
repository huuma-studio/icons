import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Link2({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M9 17H7A5 5 0 0 1 7 7h2",
      }),
      jsx("path", {
        d: "M15 7h2a5 5 0 1 1 0 10h-2",
      }),
      jsx("line", {
        x1: "8",
        x2: "16",
        y1: "12",
        y2: "12",
      }),
    ],
  });
}
