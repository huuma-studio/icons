import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ArrowDownNarrowWide({
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
        d: "m3 16 4 4 4-4",
      }),
      jsx("path", {
        d: "M7 20V4",
      }),
      jsx("path", {
        d: "M11 4h4",
      }),
      jsx("path", {
        d: "M11 8h7",
      }),
      jsx("path", {
        d: "M11 12h10",
      }),
    ],
  });
}
