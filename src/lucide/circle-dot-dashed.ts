import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CircleDotDashed({
  children: _,
  size = 24,
  ...props
}: IconProps): JSX.Element {
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
        d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0",
      }),
      jsx("path", {
        d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",
      }),
      jsx("path", {
        d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8",
      }),
      jsx("path", {
        d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",
      }),
      jsx("path", {
        d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0",
      }),
      jsx("path", {
        d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",
      }),
      jsx("path", {
        d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8",
      }),
      jsx("path", {
        d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "1",
      }),
    ],
  });
}
