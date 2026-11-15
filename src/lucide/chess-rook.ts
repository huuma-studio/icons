import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ChessRook({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z",
      }),
      jsx("path", {
        d: "M10 2v2",
      }),
      jsx("path", {
        d: "M14 2v2",
      }),
      jsx("path", {
        d: "m17 18-1-9",
      }),
      jsx("path", {
        d: "M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2",
      }),
      jsx("path", {
        d: "M6 4h12",
      }),
      jsx("path", {
        d: "m7 18 1-9",
      }),
    ],
  });
}
