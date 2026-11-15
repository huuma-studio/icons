import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function GitFork({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("circle", {
        cx: "12",
        cy: "18",
        r: "3",
      }),
      jsx("circle", {
        cx: "6",
        cy: "6",
        r: "3",
      }),
      jsx("circle", {
        cx: "18",
        cy: "6",
        r: "3",
      }),
      jsx("path", {
        d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",
      }),
      jsx("path", {
        d: "M12 12v3",
      }),
    ],
  });
}
