import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Pizza({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m12 14-1 1",
      }),
      jsx("path", {
        d: "m13.75 18.25-1.25 1.42",
      }),
      jsx("path", {
        d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",
      }),
      jsx("path", {
        d: "M18.8 9.3a1 1 0 0 0 2.1 7.7",
      }),
      jsx("path", {
        d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",
      }),
    ],
  });
}
