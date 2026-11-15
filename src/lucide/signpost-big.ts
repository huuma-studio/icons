import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SignpostBig({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10 9H4L2 7l2-2h6",
      }),
      jsx("path", {
        d: "M14 5h6l2 2-2 2h-6",
      }),
      jsx("path", {
        d: "M10 22V4a2 2 0 1 1 4 0v18",
      }),
      jsx("path", {
        d: "M8 22h8",
      }),
    ],
  });
}
