import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Maximize({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M8 3H5a2 2 0 0 0-2 2v3",
      }),
      jsx("path", {
        d: "M21 8V5a2 2 0 0 0-2-2h-3",
      }),
      jsx("path", {
        d: "M3 16v3a2 2 0 0 0 2 2h3",
      }),
      jsx("path", {
        d: "M16 21h3a2 2 0 0 0 2-2v-3",
      }),
    ],
  });
}
