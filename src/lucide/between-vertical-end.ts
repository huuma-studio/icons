import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BetweenVerticalEnd({
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
        width: "7",
        height: "13",
        x: "3",
        y: "3",
        rx: "1",
      }),
      jsx("path", {
        d: "m9 22 3-3 3 3",
      }),
      jsx("rect", {
        width: "7",
        height: "13",
        x: "14",
        y: "3",
        rx: "1",
      }),
    ],
  });
}
