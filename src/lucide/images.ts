import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Images({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16",
      }),
      jsx("path", {
        d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2",
      }),
      jsx("circle", {
        cx: "13",
        cy: "7",
        r: "1",
        fill: "currentColor",
      }),
      jsx("rect", {
        x: "8",
        y: "2",
        width: "14",
        height: "14",
        rx: "2",
      }),
    ],
  });
}
