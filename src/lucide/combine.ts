import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Combine({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",
      }),
      jsx("path", {
        d: "M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",
      }),
      jsx("path", {
        d: "m7 15 3 3",
      }),
      jsx("path", {
        d: "m7 21 3-3H5a2 2 0 0 1-2-2v-2",
      }),
      jsx("rect", {
        x: "14",
        y: "14",
        width: "7",
        height: "7",
        rx: "1",
      }),
      jsx("rect", {
        x: "3",
        y: "3",
        width: "7",
        height: "7",
        rx: "1",
      }),
    ],
  });
}
