import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Angry({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "10",
      }),
      jsx("path", {
        d: "M16 16s-1.5-2-4-2-4 2-4 2",
      }),
      jsx("path", {
        d: "M7.5 8 10 9",
      }),
      jsx("path", {
        d: "m14 9 2.5-1",
      }),
      jsx("path", {
        d: "M9 10h.01",
      }),
      jsx("path", {
        d: "M15 10h.01",
      }),
    ],
  });
}
