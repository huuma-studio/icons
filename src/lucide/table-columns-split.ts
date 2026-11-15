import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TableColumnsSplit({
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
        d: "M14 14v2",
      }),
      jsx("path", {
        d: "M14 20v2",
      }),
      jsx("path", {
        d: "M14 2v2",
      }),
      jsx("path", {
        d: "M14 8v2",
      }),
      jsx("path", {
        d: "M2 15h8",
      }),
      jsx("path", {
        d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",
      }),
      jsx("path", {
        d: "M2 9h8",
      }),
      jsx("path", {
        d: "M22 15h-4",
      }),
      jsx("path", {
        d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",
      }),
      jsx("path", {
        d: "M22 9h-4",
      }),
      jsx("path", {
        d: "M5 3v18",
      }),
    ],
  });
}
