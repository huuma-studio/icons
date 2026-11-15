import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Vibrate({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m2 8 2 2-2 2 2 2-2 2",
      }),
      jsx("path", {
        d: "m22 8-2 2 2 2-2 2 2 2",
      }),
      jsx("rect", {
        width: "8",
        height: "14",
        x: "8",
        y: "5",
        rx: "1",
      }),
    ],
  });
}
