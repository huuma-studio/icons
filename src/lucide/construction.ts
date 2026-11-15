import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Construction({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        x: "2",
        y: "6",
        width: "20",
        height: "8",
        rx: "1",
      }),
      jsx("path", {
        d: "M17 14v7",
      }),
      jsx("path", {
        d: "M7 14v7",
      }),
      jsx("path", {
        d: "M17 3v3",
      }),
      jsx("path", {
        d: "M7 3v3",
      }),
      jsx("path", {
        d: "M10 14 2.3 6.3",
      }),
      jsx("path", {
        d: "m14 6 7.7 7.7",
      }),
      jsx("path", {
        d: "m8 6 8 8",
      }),
    ],
  });
}
