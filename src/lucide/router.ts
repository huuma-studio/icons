import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Router({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
      }),
      jsx("path", {
        d: "M6.01 18H6",
      }),
      jsx("path", {
        d: "M10.01 18H10",
      }),
      jsx("path", {
        d: "M15 10v4",
      }),
      jsx("path", {
        d: "M17.84 7.17a4 4 0 0 0-5.66 0",
      }),
      jsx("path", {
        d: "M20.66 4.34a8 8 0 0 0-11.31 0",
      }),
    ],
  });
}
