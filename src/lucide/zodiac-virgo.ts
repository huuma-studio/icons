import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ZodiacVirgo({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5",
      }),
      jsx("path", {
        d: "M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5",
      }),
      jsx("path", {
        d: "M6 19V6a3 3 0 0 0-3-3h0",
      }),
      jsx("path", {
        d: "M6 5.5a1 1 0 0 1 5 0V19",
      }),
    ],
  });
}
