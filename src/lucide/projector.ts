import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Projector({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M5 7 3 5",
      }),
      jsx("path", {
        d: "M9 6V3",
      }),
      jsx("path", {
        d: "m13 7 2-2",
      }),
      jsx("circle", {
        cx: "9",
        cy: "13",
        r: "3",
      }),
      jsx("path", {
        d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",
      }),
      jsx("path", {
        d: "M16 16h2",
      }),
    ],
  });
}
