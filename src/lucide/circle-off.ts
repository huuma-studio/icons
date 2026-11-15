import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CircleOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m2 2 20 20",
      }),
      jsx("path", {
        d: "M8.35 2.69A10 10 0 0 1 21.3 15.65",
      }),
      jsx("path", {
        d: "M19.08 19.08A10 10 0 1 1 4.92 4.92",
      }),
    ],
  });
}
