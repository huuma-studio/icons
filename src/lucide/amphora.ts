import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Amphora({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8",
      }),
      jsx("path", {
        d: "M10 5H8a2 2 0 0 0 0 4h.68",
      }),
      jsx("path", {
        d: "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8",
      }),
      jsx("path", {
        d: "M14 5h2a2 2 0 0 1 0 4h-.68",
      }),
      jsx("path", {
        d: "M18 22H6",
      }),
      jsx("path", {
        d: "M9 2h6",
      }),
    ],
  });
}
