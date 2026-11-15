import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TrendingUpDown({
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
        d: "M14.828 14.828 21 21",
      }),
      jsx("path", {
        d: "M21 16v5h-5",
      }),
      jsx("path", {
        d: "m21 3-9 9-4-4-6 6",
      }),
      jsx("path", {
        d: "M21 8V3h-5",
      }),
    ],
  });
}
