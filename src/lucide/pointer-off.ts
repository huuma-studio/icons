import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function PointerOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10 4.5V4a2 2 0 0 0-2.41-1.957",
      }),
      jsx("path", {
        d: "M13.9 8.4a2 2 0 0 0-1.26-1.295",
      }),
      jsx("path", {
        d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",
      }),
      jsx("path", {
        d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",
      }),
      jsx("path", {
        d: "M6 6v8",
      }),
      jsx("path", {
        d: "m2 2 20 20",
      }),
    ],
  });
}
