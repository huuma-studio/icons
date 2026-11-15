import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Mic({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 19v3",
      }),
      jsx("path", {
        d: "M19 10v2a7 7 0 0 1-14 0v-2",
      }),
      jsx("rect", {
        x: "9",
        y: "2",
        width: "6",
        height: "13",
        rx: "3",
      }),
    ],
  });
}
