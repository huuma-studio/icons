import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Bird({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M16 7h.01",
      }),
      jsx("path", {
        d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",
      }),
      jsx("path", {
        d: "m20 7 2 .5-2 .5",
      }),
      jsx("path", {
        d: "M10 18v3",
      }),
      jsx("path", {
        d: "M14 17.75V21",
      }),
      jsx("path", {
        d: "M7 18a6 6 0 0 0 3.84-10.61",
      }),
    ],
  });
}
