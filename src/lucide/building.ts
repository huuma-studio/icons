import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Building({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 10h.01",
      }),
      jsx("path", {
        d: "M12 14h.01",
      }),
      jsx("path", {
        d: "M12 6h.01",
      }),
      jsx("path", {
        d: "M16 10h.01",
      }),
      jsx("path", {
        d: "M16 14h.01",
      }),
      jsx("path", {
        d: "M16 6h.01",
      }),
      jsx("path", {
        d: "M8 10h.01",
      }),
      jsx("path", {
        d: "M8 14h.01",
      }),
      jsx("path", {
        d: "M8 6h.01",
      }),
      jsx("path", {
        d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",
      }),
      jsx("rect", {
        x: "4",
        y: "2",
        width: "16",
        height: "20",
        rx: "2",
      }),
    ],
  });
}
