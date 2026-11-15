import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TriangleDashed({
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
        d: "M10.17 4.193a2 2 0 0 1 3.666.013",
      }),
      jsx("path", {
        d: "M14 21h2",
      }),
      jsx("path", {
        d: "m15.874 7.743 1 1.732",
      }),
      jsx("path", {
        d: "m18.849 12.952 1 1.732",
      }),
      jsx("path", {
        d: "M21.824 18.18a2 2 0 0 1-1.835 2.824",
      }),
      jsx("path", {
        d: "M4.024 21a2 2 0 0 1-1.839-2.839",
      }),
      jsx("path", {
        d: "m5.136 12.952-1 1.732",
      }),
      jsx("path", {
        d: "M8 21h2",
      }),
      jsx("path", {
        d: "m8.102 7.743-1 1.732",
      }),
    ],
  });
}
