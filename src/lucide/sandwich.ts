import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Sandwich({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777",
      }),
      jsx("path", {
        d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25",
      }),
      jsx("path", {
        d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9",
      }),
      jsx("path", {
        d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",
      }),
      jsx("rect", {
        width: "20",
        height: "4",
        x: "2",
        y: "11",
        rx: "1",
      }),
    ],
  });
}
