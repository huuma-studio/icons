import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function UserKey({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M20 11v6",
      }),
      jsx("path", {
        d: "M20 13h2",
      }),
      jsx("path", {
        d: "M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578",
      }),
      jsx("circle", {
        cx: "10",
        cy: "7",
        r: "4",
      }),
      jsx("circle", {
        cx: "20",
        cy: "19",
        r: "2",
      }),
    ],
  });
}
