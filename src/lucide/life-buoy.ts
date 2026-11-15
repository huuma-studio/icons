import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function LifeBuoy({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "10",
      }),
      jsx("path", {
        d: "m4.93 4.93 4.24 4.24",
      }),
      jsx("path", {
        d: "m14.83 9.17 4.24-4.24",
      }),
      jsx("path", {
        d: "m14.83 14.83 4.24 4.24",
      }),
      jsx("path", {
        d: "m9.17 14.83-4.24 4.24",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "4",
      }),
    ],
  });
}
