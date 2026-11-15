import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Calendars({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 2v2",
      }),
      jsx("path", {
        d: "M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2",
      }),
      jsx("path", {
        d: "M18 2v2",
      }),
      jsx("path", {
        d: "M2 13h2",
      }),
      jsx("path", {
        d: "M8 8h14",
      }),
      jsx("rect", {
        x: "8",
        y: "3",
        width: "14",
        height: "14",
        rx: "2",
      }),
    ],
  });
}
