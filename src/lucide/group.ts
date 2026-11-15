import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Group({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M3 7V5c0-1.1.9-2 2-2h2",
      }),
      jsx("path", {
        d: "M17 3h2c1.1 0 2 .9 2 2v2",
      }),
      jsx("path", {
        d: "M21 17v2c0 1.1-.9 2-2 2h-2",
      }),
      jsx("path", {
        d: "M7 21H5c-1.1 0-2-.9-2-2v-2",
      }),
      jsx("rect", {
        width: "7",
        height: "5",
        x: "7",
        y: "7",
        rx: "1",
      }),
      jsx("rect", {
        width: "7",
        height: "5",
        x: "10",
        y: "12",
        rx: "1",
      }),
    ],
  });
}
