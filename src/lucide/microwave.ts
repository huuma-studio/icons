import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Microwave({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        width: "20",
        height: "15",
        x: "2",
        y: "4",
        rx: "2",
      }),
      jsx("rect", {
        width: "8",
        height: "7",
        x: "6",
        y: "8",
        rx: "1",
      }),
      jsx("path", {
        d: "M18 8v7",
      }),
      jsx("path", {
        d: "M6 19v2",
      }),
      jsx("path", {
        d: "M18 19v2",
      }),
    ],
  });
}
