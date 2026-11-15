import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SquaresIntersect({
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
        d: "M10 22a2 2 0 0 1-2-2",
      }),
      jsx("path", {
        d: "M14 2a2 2 0 0 1 2 2",
      }),
      jsx("path", {
        d: "M16 22h-2",
      }),
      jsx("path", {
        d: "M2 10V8",
      }),
      jsx("path", {
        d: "M2 4a2 2 0 0 1 2-2",
      }),
      jsx("path", {
        d: "M20 8a2 2 0 0 1 2 2",
      }),
      jsx("path", {
        d: "M22 14v2",
      }),
      jsx("path", {
        d: "M22 20a2 2 0 0 1-2 2",
      }),
      jsx("path", {
        d: "M4 16a2 2 0 0 1-2-2",
      }),
      jsx("path", {
        d: "M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z",
      }),
      jsx("path", {
        d: "M8 2h2",
      }),
    ],
  });
}
