import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CalendarOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",
      }),
      jsx("path", {
        d: "M21 15.5V6a2 2 0 0 0-2-2H9.5",
      }),
      jsx("path", {
        d: "M16 2v4",
      }),
      jsx("path", {
        d: "M3 10h7",
      }),
      jsx("path", {
        d: "M21 10h-5.5",
      }),
      jsx("path", {
        d: "m2 2 20 20",
      }),
    ],
  });
}
