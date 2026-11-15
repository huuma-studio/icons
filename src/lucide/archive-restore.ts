import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ArchiveRestore({
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
      jsx("rect", {
        width: "20",
        height: "5",
        x: "2",
        y: "3",
        rx: "1",
      }),
      jsx("path", {
        d: "M4 8v11a2 2 0 0 0 2 2h2",
      }),
      jsx("path", {
        d: "M20 8v11a2 2 0 0 1-2 2h-2",
      }),
      jsx("path", {
        d: "m9 15 3-3 3 3",
      }),
      jsx("path", {
        d: "M12 12v9",
      }),
    ],
  });
}
