import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ArchiveX({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
      }),
      jsx("path", {
        d: "m9.5 17 5-5",
      }),
      jsx("path", {
        d: "m9.5 12 5 5",
      }),
    ],
  });
}
