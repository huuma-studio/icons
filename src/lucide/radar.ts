import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Radar({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M19.07 4.93A10 10 0 0 0 6.99 3.34",
      }),
      jsx("path", {
        d: "M4 6h.01",
      }),
      jsx("path", {
        d: "M2.29 9.62A10 10 0 1 0 21.31 8.35",
      }),
      jsx("path", {
        d: "M16.24 7.76A6 6 0 1 0 8.23 16.67",
      }),
      jsx("path", {
        d: "M12 18h.01",
      }),
      jsx("path", {
        d: "M17.99 11.66A6 6 0 0 1 15.77 16.67",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "2",
      }),
      jsx("path", {
        d: "m13.41 10.59 5.66-5.66",
      }),
    ],
  });
}
