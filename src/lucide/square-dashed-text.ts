import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SquareDashedText({
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
        d: "M14 21h1",
      }),
      jsx("path", {
        d: "M14 3h1",
      }),
      jsx("path", {
        d: "M19 3a2 2 0 0 1 2 2",
      }),
      jsx("path", {
        d: "M21 14v1",
      }),
      jsx("path", {
        d: "M21 19a2 2 0 0 1-2 2",
      }),
      jsx("path", {
        d: "M21 9v1",
      }),
      jsx("path", {
        d: "M3 14v1",
      }),
      jsx("path", {
        d: "M3 9v1",
      }),
      jsx("path", {
        d: "M5 21a2 2 0 0 1-2-2",
      }),
      jsx("path", {
        d: "M5 3a2 2 0 0 0-2 2",
      }),
      jsx("path", {
        d: "M7 12h10",
      }),
      jsx("path", {
        d: "M7 16h6",
      }),
      jsx("path", {
        d: "M7 8h8",
      }),
      jsx("path", {
        d: "M9 21h1",
      }),
      jsx("path", {
        d: "M9 3h1",
      }),
    ],
  });
}
