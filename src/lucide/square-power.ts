import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SquarePower({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 7v4",
      }),
      jsx("path", {
        d: "M7.998 9.003a5 5 0 1 0 8-.005",
      }),
      jsx("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
      }),
    ],
  });
}
