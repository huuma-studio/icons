import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TextInitial({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M15 5h6",
      }),
      jsx("path", {
        d: "M15 12h6",
      }),
      jsx("path", {
        d: "M3 19h18",
      }),
      jsx("path", {
        d: "m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12",
      }),
      jsx("path", {
        d: "M3.92 10h6.16",
      }),
    ],
  });
}
