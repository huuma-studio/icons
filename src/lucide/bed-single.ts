import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BedSingle({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",
      }),
      jsx("path", {
        d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",
      }),
      jsx("path", {
        d: "M3 18h18",
      }),
    ],
  });
}
