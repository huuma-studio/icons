import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Bed({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M2 4v16",
      }),
      jsx("path", {
        d: "M2 8h18a2 2 0 0 1 2 2v10",
      }),
      jsx("path", {
        d: "M2 17h20",
      }),
      jsx("path", {
        d: "M6 8v9",
      }),
    ],
  });
}
