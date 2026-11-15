import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ChartNetwork({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m13.11 7.664 1.78 2.672",
      }),
      jsx("path", {
        d: "m14.162 12.788-3.324 1.424",
      }),
      jsx("path", {
        d: "m20 4-6.06 1.515",
      }),
      jsx("path", {
        d: "M3 3v16a2 2 0 0 0 2 2h16",
      }),
      jsx("circle", {
        cx: "12",
        cy: "6",
        r: "2",
      }),
      jsx("circle", {
        cx: "16",
        cy: "12",
        r: "2",
      }),
      jsx("circle", {
        cx: "9",
        cy: "15",
        r: "2",
      }),
    ],
  });
}
