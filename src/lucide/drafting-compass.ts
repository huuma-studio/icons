import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function DraftingCompass({
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
        d: "m12.99 6.74 1.93 3.44",
      }),
      jsx("path", {
        d: "M19.136 12a10 10 0 0 1-14.271 0",
      }),
      jsx("path", {
        d: "m21 21-2.16-3.84",
      }),
      jsx("path", {
        d: "m3 21 8.02-14.26",
      }),
      jsx("circle", {
        cx: "12",
        cy: "5",
        r: "2",
      }),
    ],
  });
}
