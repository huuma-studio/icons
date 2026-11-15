import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BeerOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M13 13v5",
      }),
      jsx("path", {
        d: "M17 11.47V8",
      }),
      jsx("path", {
        d: "M17 11h1a3 3 0 0 1 2.745 4.211",
      }),
      jsx("path", {
        d: "m2 2 20 20",
      }),
      jsx("path", {
        d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3",
      }),
      jsx("path", {
        d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268",
      }),
      jsx("path", {
        d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12",
      }),
      jsx("path", {
        d: "M9 14.6V18",
      }),
    ],
  });
}
