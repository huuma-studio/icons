import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BookKey({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15",
      }),
      jsx("path", {
        d: "M17 2v6",
      }),
      jsx("path", {
        d: "M17 4h2",
      }),
      jsx("path", {
        d: "M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      }),
      jsx("circle", {
        cx: "17",
        cy: "10",
        r: "2",
      }),
    ],
  });
}
