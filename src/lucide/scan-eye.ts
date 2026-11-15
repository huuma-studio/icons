import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ScanEye({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M3 7V5a2 2 0 0 1 2-2h2",
      }),
      jsx("path", {
        d: "M17 3h2a2 2 0 0 1 2 2v2",
      }),
      jsx("path", {
        d: "M21 17v2a2 2 0 0 1-2 2h-2",
      }),
      jsx("path", {
        d: "M7 21H5a2 2 0 0 1-2-2v-2",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "1",
      }),
      jsx("path", {
        d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",
      }),
    ],
  });
}
