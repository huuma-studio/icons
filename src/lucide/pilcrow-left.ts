import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function PilcrowLeft({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M14 3v11",
      }),
      jsx("path", {
        d: "M14 9h-3a3 3 0 0 1 0-6h9",
      }),
      jsx("path", {
        d: "M18 3v11",
      }),
      jsx("path", {
        d: "M22 18H2l4-4",
      }),
      jsx("path", {
        d: "m6 22-4-4",
      }),
    ],
  });
}
