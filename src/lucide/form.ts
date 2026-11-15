import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Form({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M4 14h6",
      }),
      jsx("path", {
        d: "M4 2h10",
      }),
      jsx("rect", {
        x: "4",
        y: "18",
        width: "16",
        height: "4",
        rx: "1",
      }),
      jsx("rect", {
        x: "4",
        y: "6",
        width: "16",
        height: "4",
        rx: "1",
      }),
    ],
  });
}
