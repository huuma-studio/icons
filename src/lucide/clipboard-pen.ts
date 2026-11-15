import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ClipboardPen({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M16 4h2a2 2 0 0 1 2 2v2",
      }),
      jsx("path", {
        d: "M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      }),
      jsx("path", {
        d: "M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      }),
      jsx("rect", {
        x: "8",
        y: "2",
        width: "8",
        height: "4",
        rx: "1",
      }),
    ],
  });
}
