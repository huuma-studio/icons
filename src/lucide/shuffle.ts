import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Shuffle({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m18 14 4 4-4 4",
      }),
      jsx("path", {
        d: "m18 2 4 4-4 4",
      }),
      jsx("path", {
        d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
      }),
      jsx("path", {
        d: "M2 6h1.972a4 4 0 0 1 3.6 2.2",
      }),
      jsx("path", {
        d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",
      }),
    ],
  });
}
