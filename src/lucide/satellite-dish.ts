import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SatelliteDish({
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
        d: "M4 10a7.31 7.31 0 0 0 10 10Z",
      }),
      jsx("path", {
        d: "m9 15 3-3",
      }),
      jsx("path", {
        d: "M17 13a6 6 0 0 0-6-6",
      }),
      jsx("path", {
        d: "M21 13A10 10 0 0 0 11 3",
      }),
    ],
  });
}
