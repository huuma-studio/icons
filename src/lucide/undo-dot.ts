import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function UndoDot({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M21 17a9 9 0 0 0-15-6.7L3 13",
      }),
      jsx("path", {
        d: "M3 7v6h6",
      }),
      jsx("circle", {
        cx: "12",
        cy: "17",
        r: "1",
      }),
    ],
  });
}
