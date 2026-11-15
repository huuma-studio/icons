import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function RadioTower({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9",
      }),
      jsx("path", {
        d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",
      }),
      jsx("circle", {
        cx: "12",
        cy: "9",
        r: "2",
      }),
      jsx("path", {
        d: "M16.2 4.8c2 2 2.26 5.11.8 7.47",
      }),
      jsx("path", {
        d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1",
      }),
      jsx("path", {
        d: "M9.5 18h5",
      }),
      jsx("path", {
        d: "m8 22 4-11 4 11",
      }),
    ],
  });
}
