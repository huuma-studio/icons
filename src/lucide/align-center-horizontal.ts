import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function AlignCenterHorizontal({
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
        d: "M2 12h20",
      }),
      jsx("path", {
        d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",
      }),
      jsx("path", {
        d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",
      }),
      jsx("path", {
        d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",
      }),
      jsx("path", {
        d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",
      }),
    ],
  });
}
