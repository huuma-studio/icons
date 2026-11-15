import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ListOrdered({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M11 5h10",
      }),
      jsx("path", {
        d: "M11 12h10",
      }),
      jsx("path", {
        d: "M11 19h10",
      }),
      jsx("path", {
        d: "M4 4h1v5",
      }),
      jsx("path", {
        d: "M4 9h2",
      }),
      jsx("path", {
        d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",
      }),
    ],
  });
}
