import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function LaptopMinimal({
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
        width: "18",
        height: "12",
        x: "3",
        y: "4",
        rx: "2",
        ry: "2",
      }),
      jsx("line", {
        x1: "2",
        x2: "22",
        y1: "20",
        y2: "20",
      }),
    ],
  });
}
