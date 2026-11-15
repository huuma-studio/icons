import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function RockingChair({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m15 13 3.708 7.416",
      }),
      jsx("path", {
        d: "M3 19a15 15 0 0 0 18 0",
      }),
      jsx("path", {
        d: "m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18",
      }),
      jsx("path", {
        d: "m9 13-3.708 7.416",
      }),
    ],
  });
}
