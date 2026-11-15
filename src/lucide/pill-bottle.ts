import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function PillBottle({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",
      }),
      jsx("path", {
        d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",
      }),
      jsx("rect", {
        width: "16",
        height: "5",
        x: "4",
        y: "2",
        rx: "1",
      }),
    ],
  });
}
