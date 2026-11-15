import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Usb({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        r: "1",
      }),
      jsx("circle", {
        cx: "4",
        cy: "20",
        r: "1",
      }),
      jsx("path", {
        d: "M4.7 19.3 19 5",
      }),
      jsx("path", {
        d: "m21 3-3 1 2 2Z",
      }),
      jsx("path", {
        d: "M9.26 7.68 5 12l2 5",
      }),
      jsx("path", {
        d: "m10 14 5 2 3.5-3.5",
      }),
      jsx("path", {
        d: "m18 12 1-1 1 1-1 1Z",
      }),
    ],
  });
}
