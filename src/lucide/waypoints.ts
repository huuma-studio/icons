import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Waypoints({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m10.586 5.414-5.172 5.172",
      }),
      jsx("path", {
        d: "m18.586 13.414-5.172 5.172",
      }),
      jsx("path", {
        d: "M6 12h12",
      }),
      jsx("circle", {
        cx: "12",
        cy: "20",
        r: "2",
      }),
      jsx("circle", {
        cx: "12",
        cy: "4",
        r: "2",
      }),
      jsx("circle", {
        cx: "20",
        cy: "12",
        r: "2",
      }),
      jsx("circle", {
        cx: "4",
        cy: "12",
        r: "2",
      }),
    ],
  });
}
