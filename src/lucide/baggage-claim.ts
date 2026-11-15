import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BaggageClaim({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",
      }),
      jsx("path", {
        d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",
      }),
      jsx("rect", {
        width: "13",
        height: "8",
        x: "8",
        y: "6",
        rx: "1",
      }),
      jsx("circle", {
        cx: "18",
        cy: "20",
        r: "2",
      }),
      jsx("circle", {
        cx: "9",
        cy: "20",
        r: "2",
      }),
    ],
  });
}
