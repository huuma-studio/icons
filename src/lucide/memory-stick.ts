import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function MemoryStick({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 12v-2",
      }),
      jsx("path", {
        d: "M12 18v-2",
      }),
      jsx("path", {
        d: "M16 12v-2",
      }),
      jsx("path", {
        d: "M16 18v-2",
      }),
      jsx("path", {
        d: "M2 11h1.5",
      }),
      jsx("path", {
        d: "M20 18v-2",
      }),
      jsx("path", {
        d: "M20.5 11H22",
      }),
      jsx("path", {
        d: "M4 18v-2",
      }),
      jsx("path", {
        d: "M8 12v-2",
      }),
      jsx("path", {
        d: "M8 18v-2",
      }),
      jsx("rect", {
        x: "2",
        y: "6",
        width: "20",
        height: "10",
        rx: "2",
      }),
    ],
  });
}
