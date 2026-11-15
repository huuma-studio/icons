import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function AlignHorizontalJustifyStart({
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
        width: "6",
        height: "14",
        x: "6",
        y: "5",
        rx: "2",
      }),
      jsx("rect", {
        width: "6",
        height: "10",
        x: "16",
        y: "7",
        rx: "2",
      }),
      jsx("path", {
        d: "M2 2v20",
      }),
    ],
  });
}
