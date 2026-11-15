import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Wand({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M15 4V2",
      }),
      jsx("path", {
        d: "M15 16v-2",
      }),
      jsx("path", {
        d: "M8 9h2",
      }),
      jsx("path", {
        d: "M20 9h2",
      }),
      jsx("path", {
        d: "M17.8 11.8 19 13",
      }),
      jsx("path", {
        d: "M15 9h.01",
      }),
      jsx("path", {
        d: "M17.8 6.2 19 5",
      }),
      jsx("path", {
        d: "m3 21 9-9",
      }),
      jsx("path", {
        d: "M12.2 6.2 11 5",
      }),
    ],
  });
}
