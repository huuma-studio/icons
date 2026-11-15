import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Castle({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10 5V3",
      }),
      jsx("path", {
        d: "M14 5V3",
      }),
      jsx("path", {
        d: "M15 21v-3a3 3 0 0 0-6 0v3",
      }),
      jsx("path", {
        d: "M18 3v8",
      }),
      jsx("path", {
        d: "M18 5H6",
      }),
      jsx("path", {
        d: "M22 11H2",
      }),
      jsx("path", {
        d: "M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9",
      }),
      jsx("path", {
        d: "M6 3v8",
      }),
    ],
  });
}
