import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BetweenHorizontalStart({
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
      jsx("rect", {
        width: "13",
        height: "7",
        x: "8",
        y: "3",
        rx: "1",
      }),
      jsx("path", {
        d: "m2 9 3 3-3 3",
      }),
      jsx("rect", {
        width: "13",
        height: "7",
        x: "8",
        y: "14",
        rx: "1",
      }),
    ],
  });
}
