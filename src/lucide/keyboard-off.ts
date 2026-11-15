import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function KeyboardOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M 20 4 A2 2 0 0 1 22 6",
      }),
      jsx("path", {
        d: "M 22 6 L 22 16.41",
      }),
      jsx("path", {
        d: "M 7 16 L 16 16",
      }),
      jsx("path", {
        d: "M 9.69 4 L 20 4",
      }),
      jsx("path", {
        d: "M14 8h.01",
      }),
      jsx("path", {
        d: "M18 8h.01",
      }),
      jsx("path", {
        d: "m2 2 20 20",
      }),
      jsx("path", {
        d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",
      }),
      jsx("path", {
        d: "M6 8h.01",
      }),
      jsx("path", {
        d: "M8 12h.01",
      }),
    ],
  });
}
