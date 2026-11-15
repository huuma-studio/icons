import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ScanHeart({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M17 3h2a2 2 0 0 1 2 2v2",
      }),
      jsx("path", {
        d: "M21 17v2a2 2 0 0 1-2 2h-2",
      }),
      jsx("path", {
        d: "M3 7V5a2 2 0 0 1 2-2h2",
      }),
      jsx("path", {
        d: "M7 21H5a2 2 0 0 1-2-2v-2",
      }),
      jsx("path", {
        d: "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z",
      }),
    ],
  });
}
