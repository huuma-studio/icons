import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Bubbles({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M7.001 15.085A1.5 1.5 0 0 1 9 16.5",
      }),
      jsx("circle", {
        cx: "18.5",
        cy: "8.5",
        r: "3.5",
      }),
      jsx("circle", {
        cx: "7.5",
        cy: "16.5",
        r: "5.5",
      }),
      jsx("circle", {
        cx: "7.5",
        cy: "4.5",
        r: "2.5",
      }),
    ],
  });
}
