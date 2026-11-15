import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Scale({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 3v18",
      }),
      jsx("path", {
        d: "m19 8 3 8a5 5 0 0 1-6 0zV7",
      }),
      jsx("path", {
        d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",
      }),
      jsx("path", {
        d: "m5 8 3 8a5 5 0 0 1-6 0zV7",
      }),
      jsx("path", {
        d: "M7 21h10",
      }),
    ],
  });
}
