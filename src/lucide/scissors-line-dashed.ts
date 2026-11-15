import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ScissorsLineDashed({
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
        d: "M5.42 9.42 8 12",
      }),
      jsx("circle", {
        cx: "4",
        cy: "8",
        r: "2",
      }),
      jsx("path", {
        d: "m14 6-8.58 8.58",
      }),
      jsx("circle", {
        cx: "4",
        cy: "16",
        r: "2",
      }),
      jsx("path", {
        d: "M10.8 14.8 14 18",
      }),
      jsx("path", {
        d: "M16 12h-2",
      }),
      jsx("path", {
        d: "M22 12h-2",
      }),
    ],
  });
}
