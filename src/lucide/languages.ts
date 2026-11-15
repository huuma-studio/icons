import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Languages({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m5 8 6 6",
      }),
      jsx("path", {
        d: "m4 14 6-6 2-3",
      }),
      jsx("path", {
        d: "M2 5h12",
      }),
      jsx("path", {
        d: "M7 2h1",
      }),
      jsx("path", {
        d: "m22 22-5-10-5 10",
      }),
      jsx("path", {
        d: "M14 18h6",
      }),
    ],
  });
}
