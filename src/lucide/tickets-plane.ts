import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TicketsPlane({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12",
      }),
      jsx("path", {
        d: "m12 13.5 3.794.506",
      }),
      jsx("path", {
        d: "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8",
      }),
      jsx("path", {
        d: "M6 10V8",
      }),
      jsx("path", {
        d: "M6 14v1",
      }),
      jsx("path", {
        d: "M6 19v2",
      }),
      jsx("rect", {
        x: "2",
        y: "8",
        width: "20",
        height: "13",
        rx: "2",
      }),
    ],
  });
}
