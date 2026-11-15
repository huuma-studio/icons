import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function PhilippinePeso({
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
        d: "M20 11H4",
      }),
      jsx("path", {
        d: "M20 7H4",
      }),
      jsx("path", {
        d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7",
      }),
    ],
  });
}
