import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CalendarSearch({
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
        d: "M16 2v4",
      }),
      jsx("path", {
        d: "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25",
      }),
      jsx("path", {
        d: "m22 22-1.875-1.875",
      }),
      jsx("path", {
        d: "M3 10h18",
      }),
      jsx("path", {
        d: "M8 2v4",
      }),
      jsx("circle", {
        cx: "18",
        cy: "18",
        r: "3",
      }),
    ],
  });
}
