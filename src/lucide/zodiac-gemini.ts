import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ZodiacGemini({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M16 4.525v14.948",
      }),
      jsx("path", {
        d: "M20 3A17 17 0 0 1 4 3",
      }),
      jsx("path", {
        d: "M4 21a17 17 0 0 1 16 0",
      }),
      jsx("path", {
        d: "M8 4.525v14.948",
      }),
    ],
  });
}
