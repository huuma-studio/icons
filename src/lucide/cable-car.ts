import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CableCar({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10 3h.01",
      }),
      jsx("path", {
        d: "M14 2h.01",
      }),
      jsx("path", {
        d: "m2 9 20-5",
      }),
      jsx("path", {
        d: "M12 12V6.5",
      }),
      jsx("rect", {
        width: "16",
        height: "10",
        x: "4",
        y: "12",
        rx: "3",
      }),
      jsx("path", {
        d: "M9 12v5",
      }),
      jsx("path", {
        d: "M15 12v5",
      }),
      jsx("path", {
        d: "M4 17h16",
      }),
    ],
  });
}
