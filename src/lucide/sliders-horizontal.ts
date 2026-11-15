import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SlidersHorizontal({
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
        d: "M10 5H3",
      }),
      jsx("path", {
        d: "M12 19H3",
      }),
      jsx("path", {
        d: "M14 3v4",
      }),
      jsx("path", {
        d: "M16 17v4",
      }),
      jsx("path", {
        d: "M21 12h-9",
      }),
      jsx("path", {
        d: "M21 19h-5",
      }),
      jsx("path", {
        d: "M21 5h-7",
      }),
      jsx("path", {
        d: "M8 10v4",
      }),
      jsx("path", {
        d: "M8 12H3",
      }),
    ],
  });
}
