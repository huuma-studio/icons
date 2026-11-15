import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Axis3d({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M13.5 10.5 15 9",
      }),
      jsx("path", {
        d: "M4 4v15a1 1 0 0 0 1 1h15",
      }),
      jsx("path", {
        d: "M4.293 19.707 6 18",
      }),
      jsx("path", {
        d: "m9 15 1.5-1.5",
      }),
    ],
  });
}
