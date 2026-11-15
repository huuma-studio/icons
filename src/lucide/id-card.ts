import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function IdCard({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M16 10h2",
      }),
      jsx("path", {
        d: "M16 14h2",
      }),
      jsx("path", {
        d: "M6.17 15a3 3 0 0 1 5.66 0",
      }),
      jsx("circle", {
        cx: "9",
        cy: "11",
        r: "2",
      }),
      jsx("rect", {
        x: "2",
        y: "5",
        width: "20",
        height: "14",
        rx: "2",
      }),
    ],
  });
}
