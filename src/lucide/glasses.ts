import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Glasses({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("circle", {
        cx: "6",
        cy: "15",
        r: "4",
      }),
      jsx("circle", {
        cx: "18",
        cy: "15",
        r: "4",
      }),
      jsx("path", {
        d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",
      }),
      jsx("path", {
        d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2",
      }),
      jsx("path", {
        d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2",
      }),
    ],
  });
}
