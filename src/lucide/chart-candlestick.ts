import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ChartCandlestick({
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
        d: "M9 5v4",
      }),
      jsx("rect", {
        width: "4",
        height: "6",
        x: "7",
        y: "9",
        rx: "1",
      }),
      jsx("path", {
        d: "M9 15v2",
      }),
      jsx("path", {
        d: "M17 3v2",
      }),
      jsx("rect", {
        width: "4",
        height: "8",
        x: "15",
        y: "5",
        rx: "1",
      }),
      jsx("path", {
        d: "M17 13v3",
      }),
      jsx("path", {
        d: "M3 3v16a2 2 0 0 0 2 2h16",
      }),
    ],
  });
}
