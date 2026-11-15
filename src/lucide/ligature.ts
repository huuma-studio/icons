import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Ligature({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M14 12h2v8",
      }),
      jsx("path", {
        d: "M14 20h4",
      }),
      jsx("path", {
        d: "M6 12h4",
      }),
      jsx("path", {
        d: "M6 20h4",
      }),
      jsx("path", {
        d: "M8 20V8a4 4 0 0 1 7.464-2",
      }),
    ],
  });
}
