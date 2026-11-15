import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function EyeClosed({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m15 18-.722-3.25",
      }),
      jsx("path", {
        d: "M2 8a10.645 10.645 0 0 0 20 0",
      }),
      jsx("path", {
        d: "m20 15-1.726-2.05",
      }),
      jsx("path", {
        d: "m4 15 1.726-2.05",
      }),
      jsx("path", {
        d: "m9 18 .722-3.25",
      }),
    ],
  });
}
