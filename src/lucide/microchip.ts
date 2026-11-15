import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Microchip({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10 12h4",
      }),
      jsx("path", {
        d: "M10 17h4",
      }),
      jsx("path", {
        d: "M10 7h4",
      }),
      jsx("path", {
        d: "M18 12h2",
      }),
      jsx("path", {
        d: "M18 18h2",
      }),
      jsx("path", {
        d: "M18 6h2",
      }),
      jsx("path", {
        d: "M4 12h2",
      }),
      jsx("path", {
        d: "M4 18h2",
      }),
      jsx("path", {
        d: "M4 6h2",
      }),
      jsx("rect", {
        x: "6",
        y: "2",
        width: "12",
        height: "20",
        rx: "2",
      }),
    ],
  });
}
