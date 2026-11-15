import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function KeyboardMusic({
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
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
      }),
      jsx("path", {
        d: "M6 8h4",
      }),
      jsx("path", {
        d: "M14 8h.01",
      }),
      jsx("path", {
        d: "M18 8h.01",
      }),
      jsx("path", {
        d: "M2 12h20",
      }),
      jsx("path", {
        d: "M6 12v4",
      }),
      jsx("path", {
        d: "M10 12v4",
      }),
      jsx("path", {
        d: "M14 12v4",
      }),
      jsx("path", {
        d: "M18 12v4",
      }),
    ],
  });
}
