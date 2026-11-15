import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Cake({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",
      }),
      jsx("path", {
        d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",
      }),
      jsx("path", {
        d: "M2 21h20",
      }),
      jsx("path", {
        d: "M7 8v3",
      }),
      jsx("path", {
        d: "M12 8v3",
      }),
      jsx("path", {
        d: "M17 8v3",
      }),
      jsx("path", {
        d: "M7 4h.01",
      }),
      jsx("path", {
        d: "M12 4h.01",
      }),
      jsx("path", {
        d: "M17 4h.01",
      }),
    ],
  });
}
