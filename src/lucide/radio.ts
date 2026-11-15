import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Radio({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M16.247 7.761a6 6 0 0 1 0 8.478",
      }),
      jsx("path", {
        d: "M19.075 4.933a10 10 0 0 1 0 14.134",
      }),
      jsx("path", {
        d: "M4.925 19.067a10 10 0 0 1 0-14.134",
      }),
      jsx("path", {
        d: "M7.753 16.239a6 6 0 0 1 0-8.478",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "2",
      }),
    ],
  });
}
