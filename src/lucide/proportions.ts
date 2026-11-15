import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Proportions({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("path", {
        d: "M12 9v11",
      }),
      jsx("path", {
        d: "M2 9h13a2 2 0 0 1 2 2v9",
      }),
    ],
  });
}
