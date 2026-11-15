import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Brackets({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3",
      }),
      jsx("path", {
        d: "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3",
      }),
    ],
  });
}
