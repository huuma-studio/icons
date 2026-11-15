import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SquaresSubtract({
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
        d: "M16 22h-2",
      }),
      jsx("path", {
        d: "M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z",
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
    ],
  });
}
