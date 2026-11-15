import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Network({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        x: "16",
        y: "16",
        width: "6",
        height: "6",
        rx: "1",
      }),
      jsx("rect", {
        x: "2",
        y: "16",
        width: "6",
        height: "6",
        rx: "1",
      }),
      jsx("rect", {
        x: "9",
        y: "2",
        width: "6",
        height: "6",
        rx: "1",
      }),
      jsx("path", {
        d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
      }),
      jsx("path", {
        d: "M12 12V8",
      }),
    ],
  });
}
