import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SearchCode({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m13 13.5 2-2.5-2-2.5",
      }),
      jsx("path", {
        d: "m21 21-4.3-4.3",
      }),
      jsx("path", {
        d: "M9 8.5 7 11l2 2.5",
      }),
      jsx("circle", {
        cx: "11",
        cy: "11",
        r: "8",
      }),
    ],
  });
}
