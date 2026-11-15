import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Presentation({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M2 3h20",
      }),
      jsx("path", {
        d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",
      }),
      jsx("path", {
        d: "m7 21 5-5 5 5",
      }),
    ],
  });
}
