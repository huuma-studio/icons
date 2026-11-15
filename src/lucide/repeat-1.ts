import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Repeat1({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m17 2 4 4-4 4",
      }),
      jsx("path", {
        d: "M3 11v-1a4 4 0 0 1 4-4h14",
      }),
      jsx("path", {
        d: "m7 22-4-4 4-4",
      }),
      jsx("path", {
        d: "M21 13v1a4 4 0 0 1-4 4H3",
      }),
      jsx("path", {
        d: "M11 10h1v4",
      }),
    ],
  });
}
