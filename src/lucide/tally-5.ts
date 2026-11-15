import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Tally5({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M4 4v16",
      }),
      jsx("path", {
        d: "M9 4v16",
      }),
      jsx("path", {
        d: "M14 4v16",
      }),
      jsx("path", {
        d: "M19 4v16",
      }),
      jsx("path", {
        d: "M22 6 2 18",
      }),
    ],
  });
}
