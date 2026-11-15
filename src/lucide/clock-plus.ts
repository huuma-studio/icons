import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ClockPlus({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 6v6l3.644 1.822",
      }),
      jsx("path", {
        d: "M16 19h6",
      }),
      jsx("path", {
        d: "M19 16v6",
      }),
      jsx("path", {
        d: "M21.92 13.267a10 10 0 1 0-8.653 8.653",
      }),
    ],
  });
}
