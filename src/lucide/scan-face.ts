import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ScanFace({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M3 7V5a2 2 0 0 1 2-2h2",
      }),
      jsx("path", {
        d: "M17 3h2a2 2 0 0 1 2 2v2",
      }),
      jsx("path", {
        d: "M21 17v2a2 2 0 0 1-2 2h-2",
      }),
      jsx("path", {
        d: "M7 21H5a2 2 0 0 1-2-2v-2",
      }),
      jsx("path", {
        d: "M8 14s1.5 2 4 2 4-2 4-2",
      }),
      jsx("path", {
        d: "M9 9h.01",
      }),
      jsx("path", {
        d: "M15 9h.01",
      }),
    ],
  });
}
