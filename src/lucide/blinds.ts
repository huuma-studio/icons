import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Blinds({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M3 3h18",
      }),
      jsx("path", {
        d: "M20 7H8",
      }),
      jsx("path", {
        d: "M20 11H8",
      }),
      jsx("path", {
        d: "M10 19h10",
      }),
      jsx("path", {
        d: "M8 15h12",
      }),
      jsx("path", {
        d: "M4 3v14",
      }),
      jsx("circle", {
        cx: "4",
        cy: "19",
        r: "2",
      }),
    ],
  });
}
