import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ChartColumnBig({
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
        d: "M3 3v16a2 2 0 0 0 2 2h16",
      }),
      jsx("rect", {
        x: "15",
        y: "5",
        width: "4",
        height: "12",
        rx: "1",
      }),
      jsx("rect", {
        x: "7",
        y: "8",
        width: "4",
        height: "9",
        rx: "1",
      }),
    ],
  });
}
