import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ALargeSmall({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16",
      }),
      jsx("path", {
        d: "M15.697 14h5.606",
      }),
      jsx("path", {
        d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16",
      }),
      jsx("path", {
        d: "M3.304 13h6.392",
      }),
    ],
  });
}
