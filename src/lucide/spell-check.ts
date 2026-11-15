import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SpellCheck({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m6 16 6-12 6 12",
      }),
      jsx("path", {
        d: "M8 12h8",
      }),
      jsx("path", {
        d: "m16 20 2 2 4-4",
      }),
    ],
  });
}
