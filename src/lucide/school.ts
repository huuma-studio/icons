import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function School({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M14 21v-3a2 2 0 0 0-4 0v3",
      }),
      jsx("path", {
        d: "M18 4.933V21",
      }),
      jsx("path", {
        d: "m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6",
      }),
      jsx("path", {
        d: "m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11",
      }),
      jsx("path", {
        d: "M6 4.933V21",
      }),
      jsx("circle", {
        cx: "12",
        cy: "9",
        r: "2",
      }),
    ],
  });
}
