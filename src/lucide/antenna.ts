import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Antenna({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M2 12 7 2",
      }),
      jsx("path", {
        d: "m7 12 5-10",
      }),
      jsx("path", {
        d: "m12 12 5-10",
      }),
      jsx("path", {
        d: "m17 12 5-10",
      }),
      jsx("path", {
        d: "M4.5 7h15",
      }),
      jsx("path", {
        d: "M12 16v6",
      }),
    ],
  });
}
