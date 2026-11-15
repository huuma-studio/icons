import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function MouseRight({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 7.318V10",
      }),
      jsx("path", {
        d: "M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7",
      }),
      jsx("circle", {
        cx: "17",
        cy: "4",
        r: "2",
      }),
    ],
  });
}
