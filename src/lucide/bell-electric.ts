import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BellElectric({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M18.518 17.347A7 7 0 0 1 14 19",
      }),
      jsx("path", {
        d: "M18.8 4A11 11 0 0 1 20 9",
      }),
      jsx("path", {
        d: "M9 9h.01",
      }),
      jsx("circle", {
        cx: "20",
        cy: "16",
        r: "2",
      }),
      jsx("circle", {
        cx: "9",
        cy: "9",
        r: "7",
      }),
      jsx("rect", {
        x: "4",
        y: "16",
        width: "10",
        height: "6",
        rx: "2",
      }),
    ],
  });
}
