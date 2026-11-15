import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Bot({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 8V4H8",
      }),
      jsx("rect", {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2",
      }),
      jsx("path", {
        d: "M2 14h2",
      }),
      jsx("path", {
        d: "M20 14h2",
      }),
      jsx("path", {
        d: "M15 13v2",
      }),
      jsx("path", {
        d: "M9 13v2",
      }),
    ],
  });
}
