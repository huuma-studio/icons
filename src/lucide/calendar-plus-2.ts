import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CalendarPlus2({
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
        d: "M8 2v4",
      }),
      jsx("path", {
        d: "M16 2v4",
      }),
      jsx("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
      }),
      jsx("path", {
        d: "M3 10h18",
      }),
      jsx("path", {
        d: "M10 16h4",
      }),
      jsx("path", {
        d: "M12 14v4",
      }),
    ],
  });
}
