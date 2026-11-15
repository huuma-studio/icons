import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CircleParkingOff({
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
        d: "M12.656 7H13a3 3 0 0 1 2.984 3.307",
      }),
      jsx("path", {
        d: "M13 13H9",
      }),
      jsx("path", {
        d: "M19.071 19.071A1 1 0 0 1 4.93 4.93",
      }),
      jsx("path", {
        d: "m2 2 20 20",
      }),
      jsx("path", {
        d: "M8.357 2.687a10 10 0 0 1 12.956 12.956",
      }),
      jsx("path", {
        d: "M9 17V9",
      }),
    ],
  });
}
