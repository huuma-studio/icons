import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Percent({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("line", {
        x1: "19",
        x2: "5",
        y1: "5",
        y2: "19",
      }),
      jsx("circle", {
        cx: "6.5",
        cy: "6.5",
        r: "2.5",
      }),
      jsx("circle", {
        cx: "17.5",
        cy: "17.5",
        r: "2.5",
      }),
    ],
  });
}
