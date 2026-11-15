import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function FireExtinguisher({
  children: _,
  size = 24,
  ...props
}: IconProps): JSX.Element {
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
        d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",
      }),
      jsx("path", {
        d: "M9 18h8",
      }),
      jsx("path", {
        d: "M18 3h-3",
      }),
      jsx("path", {
        d: "M11 3a6 6 0 0 0-6 6v11",
      }),
      jsx("path", {
        d: "M5 13h4",
      }),
      jsx("path", {
        d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",
      }),
    ],
  });
}
