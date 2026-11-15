import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Tractor({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20",
      }),
      jsx("path", {
        d: "M16 18h-5",
      }),
      jsx("path", {
        d: "M18 5a1 1 0 0 0-1 1v5.573",
      }),
      jsx("path", {
        d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246",
      }),
      jsx("path", {
        d: "M4 11V4",
      }),
      jsx("path", {
        d: "M7 15h.01",
      }),
      jsx("path", {
        d: "M8 10.1V4",
      }),
      jsx("circle", {
        cx: "18",
        cy: "18",
        r: "2",
      }),
      jsx("circle", {
        cx: "7",
        cy: "15",
        r: "5",
      }),
    ],
  });
}
