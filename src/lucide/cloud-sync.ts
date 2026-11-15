import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CloudSync({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m17 18-1.535 1.605a5 5 0 0 1-8-1.5",
      }),
      jsx("path", {
        d: "M17 22v-4h-4",
      }),
      jsx("path", {
        d: "M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607",
      }),
      jsx("path", {
        d: "M7 10v4h4",
      }),
      jsx("path", {
        d: "m7 14 1.535-1.605a5 5 0 0 1 8 1.5",
      }),
    ],
  });
}
