import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Lasso({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M3.704 14.467a10 8 0 1 1 3.115 2.375",
      }),
      jsx("path", {
        d: "M7 22a5 5 0 0 1-2-3.994",
      }),
      jsx("circle", {
        cx: "5",
        cy: "16",
        r: "2",
      }),
    ],
  });
}
