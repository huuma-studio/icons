import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function EarthLock({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M7 3.34V5a3 3 0 0 0 3 3",
      }),
      jsx("path", {
        d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
      }),
      jsx("path", {
        d: "M21.54 15H17a2 2 0 0 0-2 2v4.54",
      }),
      jsx("path", {
        d: "M12 2a10 10 0 1 0 9.54 13",
      }),
      jsx("path", {
        d: "M20 6V4a2 2 0 1 0-4 0v2",
      }),
      jsx("rect", {
        width: "8",
        height: "5",
        x: "14",
        y: "6",
        rx: "1",
      }),
    ],
  });
}
