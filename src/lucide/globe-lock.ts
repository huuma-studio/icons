import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function GlobeLock({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",
      }),
      jsx("path", {
        d: "M2 12h8.5",
      }),
      jsx("path", {
        d: "M20 6V4a2 2 0 1 0-4 0v2",
      }),
      jsx("rect", {
        width: "8",
        height: "5",
        x: "14",
        y: "6",
        rx: "1",
      }),
    ],
  });
}
