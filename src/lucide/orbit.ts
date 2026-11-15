import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Orbit({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M20.341 6.484A10 10 0 0 1 10.266 21.85",
      }),
      jsx("path", {
        d: "M3.659 17.516A10 10 0 0 1 13.74 2.152",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "3",
      }),
      jsx("circle", {
        cx: "19",
        cy: "5",
        r: "2",
      }),
      jsx("circle", {
        cx: "5",
        cy: "19",
        r: "2",
      }),
    ],
  });
}
