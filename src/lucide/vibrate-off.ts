import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function VibrateOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m2 8 2 2-2 2 2 2-2 2",
      }),
      jsx("path", {
        d: "m22 8-2 2 2 2-2 2 2 2",
      }),
      jsx("path", {
        d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",
      }),
      jsx("path", {
        d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34",
      }),
      jsx("line", {
        x1: "2",
        x2: "22",
        y1: "2",
        y2: "22",
      }),
    ],
  });
}
