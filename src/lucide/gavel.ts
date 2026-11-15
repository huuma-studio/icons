import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Gavel({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381",
      }),
      jsx("path", {
        d: "m16 16 6-6",
      }),
      jsx("path", {
        d: "m21.5 10.5-8-8",
      }),
      jsx("path", {
        d: "m8 8 6-6",
      }),
      jsx("path", {
        d: "m8.5 7.5 8 8",
      }),
    ],
  });
}
