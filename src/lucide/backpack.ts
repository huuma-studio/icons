import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Backpack({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",
      }),
      jsx("path", {
        d: "M8 10h8",
      }),
      jsx("path", {
        d: "M8 18h8",
      }),
      jsx("path", {
        d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",
      }),
      jsx("path", {
        d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",
      }),
    ],
  });
}
