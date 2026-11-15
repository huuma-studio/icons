import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ZodiacCancer({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M21 14.5A9 6.5 0 0 1 5.5 19",
      }),
      jsx("path", {
        d: "M3 9.5A9 6.5 0 0 1 18.5 5",
      }),
      jsx("circle", {
        cx: "17.5",
        cy: "14.5",
        r: "3.5",
      }),
      jsx("circle", {
        cx: "6.5",
        cy: "9.5",
        r: "3.5",
      }),
    ],
  });
}
