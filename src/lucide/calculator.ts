import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Calculator({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        width: "16",
        height: "20",
        x: "4",
        y: "2",
        rx: "2",
      }),
      jsx("line", {
        x1: "8",
        x2: "16",
        y1: "6",
        y2: "6",
      }),
      jsx("line", {
        x1: "16",
        x2: "16",
        y1: "14",
        y2: "18",
      }),
      jsx("path", {
        d: "M16 10h.01",
      }),
      jsx("path", {
        d: "M12 10h.01",
      }),
      jsx("path", {
        d: "M8 10h.01",
      }),
      jsx("path", {
        d: "M12 14h.01",
      }),
      jsx("path", {
        d: "M8 14h.01",
      }),
      jsx("path", {
        d: "M12 18h.01",
      }),
      jsx("path", {
        d: "M8 18h.01",
      }),
    ],
  });
}
