import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ReplaceAll({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",
      }),
      jsx("path", {
        d: "M14 4a1 1 0 0 1 1-1",
      }),
      jsx("path", {
        d: "M15 10a1 1 0 0 1-1-1",
      }),
      jsx("path", {
        d: "M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",
      }),
      jsx("path", {
        d: "M21 4a1 1 0 0 0-1-1",
      }),
      jsx("path", {
        d: "M21 9a1 1 0 0 1-1 1",
      }),
      jsx("path", {
        d: "m3 7 3 3 3-3",
      }),
      jsx("path", {
        d: "M6 10V5a2 2 0 0 1 2-2h2",
      }),
      jsx("rect", {
        x: "3",
        y: "14",
        width: "7",
        height: "7",
        rx: "1",
      }),
    ],
  });
}
