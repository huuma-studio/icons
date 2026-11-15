import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Repeat2({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m2 9 3-3 3 3",
      }),
      jsx("path", {
        d: "M13 18H7a2 2 0 0 1-2-2V6",
      }),
      jsx("path", {
        d: "m22 15-3 3-3-3",
      }),
      jsx("path", {
        d: "M11 6h6a2 2 0 0 1 2 2v10",
      }),
    ],
  });
}
