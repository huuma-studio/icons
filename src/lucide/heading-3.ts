import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Heading3({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M4 12h8",
      }),
      jsx("path", {
        d: "M4 18V6",
      }),
      jsx("path", {
        d: "M12 18V6",
      }),
      jsx("path", {
        d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",
      }),
      jsx("path", {
        d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",
      }),
    ],
  });
}
