import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function UserRoundX({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M2 21a8 8 0 0 1 11.873-7",
      }),
      jsx("circle", {
        cx: "10",
        cy: "8",
        r: "5",
      }),
      jsx("path", {
        d: "m17 17 5 5",
      }),
      jsx("path", {
        d: "m22 17-5 5",
      }),
    ],
  });
}
