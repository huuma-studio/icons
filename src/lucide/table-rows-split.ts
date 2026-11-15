import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TableRowsSplit({
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
        d: "M14 10h2",
      }),
      jsx("path", {
        d: "M15 22v-8",
      }),
      jsx("path", {
        d: "M15 2v4",
      }),
      jsx("path", {
        d: "M2 10h2",
      }),
      jsx("path", {
        d: "M20 10h2",
      }),
      jsx("path", {
        d: "M3 19h18",
      }),
      jsx("path", {
        d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",
      }),
      jsx("path", {
        d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",
      }),
      jsx("path", {
        d: "M8 10h2",
      }),
      jsx("path", {
        d: "M9 22v-8",
      }),
      jsx("path", {
        d: "M9 2v4",
      }),
    ],
  });
}
