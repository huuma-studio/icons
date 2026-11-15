import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Gpu({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2",
      }),
      jsx("path", {
        d: "M2 21V3",
      }),
      jsx("path", {
        d: "M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3",
      }),
      jsx("circle", {
        cx: "16",
        cy: "11",
        r: "2",
      }),
      jsx("circle", {
        cx: "8",
        cy: "11",
        r: "2",
      }),
    ],
  });
}
