import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SlidersVertical({
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
        d: "M10 8h4",
      }),
      jsx("path", {
        d: "M12 21v-9",
      }),
      jsx("path", {
        d: "M12 8V3",
      }),
      jsx("path", {
        d: "M17 16h4",
      }),
      jsx("path", {
        d: "M19 12V3",
      }),
      jsx("path", {
        d: "M19 21v-5",
      }),
      jsx("path", {
        d: "M3 14h4",
      }),
      jsx("path", {
        d: "M5 10V3",
      }),
      jsx("path", {
        d: "M5 21v-7",
      }),
    ],
  });
}
