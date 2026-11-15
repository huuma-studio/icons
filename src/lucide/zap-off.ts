import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ZapOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",
      }),
      jsx("path", {
        d: "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",
      }),
      jsx("path", {
        d: "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",
      }),
      jsx("path", {
        d: "m2 2 20 20",
      }),
    ],
  });
}
