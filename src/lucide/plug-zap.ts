import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function PlugZap({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
      }),
      jsx("path", {
        d: "m2 22 3-3",
      }),
      jsx("path", {
        d: "M7.5 13.5 10 11",
      }),
      jsx("path", {
        d: "M10.5 16.5 13 14",
      }),
      jsx("path", {
        d: "m18 3-4 4h6l-4 4",
      }),
    ],
  });
}
