import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Rss({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M4 11a9 9 0 0 1 9 9",
      }),
      jsx("path", {
        d: "M4 4a16 16 0 0 1 16 16",
      }),
      jsx("circle", {
        cx: "5",
        cy: "19",
        r: "1",
      }),
    ],
  });
}
