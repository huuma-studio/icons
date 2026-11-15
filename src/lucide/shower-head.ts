import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ShowerHead({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m4 4 2.5 2.5",
      }),
      jsx("path", {
        d: "M13.5 6.5a4.95 4.95 0 0 0-7 7",
      }),
      jsx("path", {
        d: "M15 5 5 15",
      }),
      jsx("path", {
        d: "M14 17v.01",
      }),
      jsx("path", {
        d: "M10 16v.01",
      }),
      jsx("path", {
        d: "M13 13v.01",
      }),
      jsx("path", {
        d: "M16 10v.01",
      }),
      jsx("path", {
        d: "M11 20v.01",
      }),
      jsx("path", {
        d: "M17 14v.01",
      }),
      jsx("path", {
        d: "M20 11v.01",
      }),
    ],
  });
}
