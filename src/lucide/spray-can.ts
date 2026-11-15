import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SprayCan({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M3 3h.01",
      }),
      jsx("path", {
        d: "M7 5h.01",
      }),
      jsx("path", {
        d: "M11 7h.01",
      }),
      jsx("path", {
        d: "M3 7h.01",
      }),
      jsx("path", {
        d: "M7 9h.01",
      }),
      jsx("path", {
        d: "M3 11h.01",
      }),
      jsx("rect", {
        width: "4",
        height: "4",
        x: "15",
        y: "5",
      }),
      jsx("path", {
        d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",
      }),
      jsx("path", {
        d: "m13 14 8-2",
      }),
      jsx("path", {
        d: "m13 19 8-2",
      }),
    ],
  });
}
