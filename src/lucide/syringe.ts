import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Syringe({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m18 2 4 4",
      }),
      jsx("path", {
        d: "m17 7 3-3",
      }),
      jsx("path", {
        d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",
      }),
      jsx("path", {
        d: "m9 11 4 4",
      }),
      jsx("path", {
        d: "m5 19-3 3",
      }),
      jsx("path", {
        d: "m14 4 6 6",
      }),
    ],
  });
}
