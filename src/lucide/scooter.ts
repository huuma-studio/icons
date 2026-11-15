import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Scooter({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M21 4h-3.5l2 11.05",
      }),
      jsx("path", {
        d: "M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009",
      }),
      jsx("circle", {
        cx: "19.5",
        cy: "17.5",
        r: "2.5",
      }),
      jsx("circle", {
        cx: "4.5",
        cy: "17.5",
        r: "2.5",
      }),
    ],
  });
}
