import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ListCheck({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M16 5H3",
      }),
      jsx("path", {
        d: "M16 12H3",
      }),
      jsx("path", {
        d: "M11 19H3",
      }),
      jsx("path", {
        d: "m15 18 2 2 4-4",
      }),
    ],
  });
}
