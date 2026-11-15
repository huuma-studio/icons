import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Stethoscope({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M11 2v2",
      }),
      jsx("path", {
        d: "M5 2v2",
      }),
      jsx("path", {
        d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
      }),
      jsx("path", {
        d: "M8 15a6 6 0 0 0 12 0v-3",
      }),
      jsx("circle", {
        cx: "20",
        cy: "10",
        r: "2",
      }),
    ],
  });
}
