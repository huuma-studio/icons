import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ArrowDownAZ({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m3 16 4 4 4-4",
      }),
      jsx("path", {
        d: "M7 20V4",
      }),
      jsx("path", {
        d: "M20 8h-5",
      }),
      jsx("path", {
        d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10",
      }),
      jsx("path", {
        d: "M15 14h5l-5 6h5",
      }),
    ],
  });
}
