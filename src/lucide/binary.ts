import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Binary({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("rect", {
        x: "14",
        y: "14",
        width: "4",
        height: "6",
        rx: "2",
      }),
      jsx("rect", {
        x: "6",
        y: "4",
        width: "4",
        height: "6",
        rx: "2",
      }),
      jsx("path", {
        d: "M6 20h4",
      }),
      jsx("path", {
        d: "M14 10h4",
      }),
      jsx("path", {
        d: "M6 14h2v6",
      }),
      jsx("path", {
        d: "M14 4h2v6",
      }),
    ],
  });
}
