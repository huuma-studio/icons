import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Scale3d({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M5 7v11a1 1 0 0 0 1 1h11",
      }),
      jsx("path", {
        d: "M5.293 18.707 11 13",
      }),
      jsx("circle", {
        cx: "19",
        cy: "19",
        r: "2",
      }),
      jsx("circle", {
        cx: "5",
        cy: "5",
        r: "2",
      }),
    ],
  });
}
