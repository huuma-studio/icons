import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ImageUpscale({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M16 3h5v5",
      }),
      jsx("path", {
        d: "M17 21h2a2 2 0 0 0 2-2",
      }),
      jsx("path", {
        d: "M21 12v3",
      }),
      jsx("path", {
        d: "m21 3-5 5",
      }),
      jsx("path", {
        d: "M3 7V5a2 2 0 0 1 2-2",
      }),
      jsx("path", {
        d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19",
      }),
      jsx("path", {
        d: "M9 3h3",
      }),
      jsx("rect", {
        x: "3",
        y: "11",
        width: "10",
        height: "10",
        rx: "1",
      }),
    ],
  });
}
