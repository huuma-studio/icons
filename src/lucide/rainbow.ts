import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Rainbow({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M22 17a10 10 0 0 0-20 0",
      }),
      jsx("path", {
        d: "M6 17a6 6 0 0 1 12 0",
      }),
      jsx("path", {
        d: "M10 17a2 2 0 0 1 4 0",
      }),
    ],
  });
}
