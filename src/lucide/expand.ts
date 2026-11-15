import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Expand({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m15 15 6 6",
      }),
      jsx("path", {
        d: "m15 9 6-6",
      }),
      jsx("path", {
        d: "M21 16v5h-5",
      }),
      jsx("path", {
        d: "M21 8V3h-5",
      }),
      jsx("path", {
        d: "M3 16v5h5",
      }),
      jsx("path", {
        d: "m3 21 6-6",
      }),
      jsx("path", {
        d: "M3 8V3h5",
      }),
      jsx("path", {
        d: "M9 9 3 3",
      }),
    ],
  });
}
