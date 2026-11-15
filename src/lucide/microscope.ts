import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Microscope({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M6 18h8",
      }),
      jsx("path", {
        d: "M3 22h18",
      }),
      jsx("path", {
        d: "M14 22a7 7 0 1 0 0-14h-1",
      }),
      jsx("path", {
        d: "M9 14h2",
      }),
      jsx("path", {
        d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",
      }),
      jsx("path", {
        d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
      }),
    ],
  });
}
