import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function UserRoundKey({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M19 11v6",
      }),
      jsx("path", {
        d: "M19 13h2",
      }),
      jsx("path", {
        d: "M2 21a8 8 0 0 1 12.868-6.349",
      }),
      jsx("circle", {
        cx: "10",
        cy: "8",
        r: "5",
      }),
      jsx("circle", {
        cx: "19",
        cy: "19",
        r: "2",
      }),
    ],
  });
}
