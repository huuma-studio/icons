import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function NavigationOff({
  children: _,
  size = 24,
  ...props
}: IconProps): JSX.Element {
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
        d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43",
      }),
      jsx("path", {
        d: "M17.39 11.73 22 2l-9.73 4.61",
      }),
      jsx("line", {
        x1: "2",
        x2: "22",
        y1: "2",
        y2: "22",
      }),
    ],
  });
}
