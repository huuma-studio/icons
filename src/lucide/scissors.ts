import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Scissors({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        cx: "6",
        cy: "6",
        r: "3",
      }),
      jsx("path", {
        d: "M8.12 8.12 12 12",
      }),
      jsx("path", {
        d: "M20 4 8.12 15.88",
      }),
      jsx("circle", {
        cx: "6",
        cy: "18",
        r: "3",
      }),
      jsx("path", {
        d: "M14.8 14.8 20 20",
      }),
    ],
  });
}
