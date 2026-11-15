import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function UserSearch({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        cy: "7",
        r: "4",
      }),
      jsx("path", {
        d: "M10.3 15H7a4 4 0 0 0-4 4v2",
      }),
      jsx("circle", {
        cx: "17",
        cy: "17",
        r: "3",
      }),
      jsx("path", {
        d: "m21 21-1.9-1.9",
      }),
    ],
  });
}
