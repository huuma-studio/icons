import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Minimize2({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m14 10 7-7",
      }),
      jsx("path", {
        d: "M20 10h-6V4",
      }),
      jsx("path", {
        d: "m3 21 7-7",
      }),
      jsx("path", {
        d: "M4 14h6v6",
      }),
    ],
  });
}
