import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ClockAlert({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 6v6l4 2",
      }),
      jsx("path", {
        d: "M20 12v5",
      }),
      jsx("path", {
        d: "M20 21h.01",
      }),
      jsx("path", {
        d: "M21.25 8.2A10 10 0 1 0 16 21.16",
      }),
    ],
  });
}
