import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ArrowsUpFromLine({
  children: _,
  size = 24,
  ...props
}: IconProps): JSX.Element {
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
        d: "m4 6 3-3 3 3",
      }),
      jsx("path", {
        d: "M7 17V3",
      }),
      jsx("path", {
        d: "m14 6 3-3 3 3",
      }),
      jsx("path", {
        d: "M17 17V3",
      }),
      jsx("path", {
        d: "M4 21h16",
      }),
    ],
  });
}
