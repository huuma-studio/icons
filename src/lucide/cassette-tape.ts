import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CassetteTape({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
      }),
      jsx("circle", {
        cx: "8",
        cy: "10",
        r: "2",
      }),
      jsx("path", {
        d: "M8 12h8",
      }),
      jsx("circle", {
        cx: "16",
        cy: "10",
        r: "2",
      }),
      jsx("path", {
        d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",
      }),
    ],
  });
}
