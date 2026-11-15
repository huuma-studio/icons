import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function IndianRupee({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M6 3h12",
      }),
      jsx("path", {
        d: "M6 8h12",
      }),
      jsx("path", {
        d: "m6 13 8.5 8",
      }),
      jsx("path", {
        d: "M6 13h3",
      }),
      jsx("path", {
        d: "M9 13c6.667 0 6.667-10 0-10",
      }),
    ],
  });
}
