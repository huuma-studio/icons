import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Notebook({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M2 6h4",
      }),
      jsx("path", {
        d: "M2 10h4",
      }),
      jsx("path", {
        d: "M2 14h4",
      }),
      jsx("path", {
        d: "M2 18h4",
      }),
      jsx("rect", {
        width: "16",
        height: "20",
        x: "4",
        y: "2",
        rx: "2",
      }),
      jsx("path", {
        d: "M16 2v20",
      }),
    ],
  });
}
