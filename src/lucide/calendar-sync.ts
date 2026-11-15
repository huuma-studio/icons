import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CalendarSync({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M11 10v4h4",
      }),
      jsx("path", {
        d: "m11 14 1.535-1.605a5 5 0 0 1 8 1.5",
      }),
      jsx("path", {
        d: "M16 2v4",
      }),
      jsx("path", {
        d: "m21 18-1.535 1.605a5 5 0 0 1-8-1.5",
      }),
      jsx("path", {
        d: "M21 22v-4h-4",
      }),
      jsx("path", {
        d: "M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3",
      }),
      jsx("path", {
        d: "M3 10h4",
      }),
      jsx("path", {
        d: "M8 2v4",
      }),
    ],
  });
}
