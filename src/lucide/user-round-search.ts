import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function UserRoundSearch({
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
      jsx("circle", {
        cx: "10",
        cy: "8",
        r: "5",
      }),
      jsx("path", {
        d: "M2 21a8 8 0 0 1 10.434-7.62",
      }),
      jsx("circle", {
        cx: "18",
        cy: "18",
        r: "3",
      }),
      jsx("path", {
        d: "m22 22-1.9-1.9",
      }),
    ],
  });
}
