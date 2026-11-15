import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SquareCenterlineDashedVertical({
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
        d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",
      }),
      jsx("path", {
        d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",
      }),
      jsx("path", {
        d: "M4 12H2",
      }),
      jsx("path", {
        d: "M10 12H8",
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
