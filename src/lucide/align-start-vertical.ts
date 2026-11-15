import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function AlignStartVertical({
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
        width: "9",
        height: "6",
        x: "6",
        y: "14",
        rx: "2",
      }),
      jsx("rect", {
        width: "16",
        height: "6",
        x: "6",
        y: "4",
        rx: "2",
      }),
      jsx("path", {
        d: "M2 2v20",
      }),
    ],
  });
}
