import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Route({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        cy: "19",
        r: "3",
      }),
      jsx("path", {
        d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",
      }),
      jsx("circle", {
        cx: "18",
        cy: "5",
        r: "3",
      }),
    ],
  });
}
