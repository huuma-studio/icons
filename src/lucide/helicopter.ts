import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Helicopter({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M11 17v4",
      }),
      jsx("path", {
        d: "M14 3v8a2 2 0 0 0 2 2h5.865",
      }),
      jsx("path", {
        d: "M17 17v4",
      }),
      jsx("path", {
        d: "M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z",
      }),
      jsx("path", {
        d: "M2 10v5",
      }),
      jsx("path", {
        d: "M6 3h16",
      }),
      jsx("path", {
        d: "M7 21h14",
      }),
      jsx("path", {
        d: "M8 13H2",
      }),
    ],
  });
}
