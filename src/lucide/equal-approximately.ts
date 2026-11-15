import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function EqualApproximately({
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
        d: "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",
      }),
      jsx("path", {
        d: "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",
      }),
    ],
  });
}
