import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SunDim({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        cx: "12",
        cy: "12",
        r: "4",
      }),
      jsx("path", {
        d: "M12 4h.01",
      }),
      jsx("path", {
        d: "M20 12h.01",
      }),
      jsx("path", {
        d: "M12 20h.01",
      }),
      jsx("path", {
        d: "M4 12h.01",
      }),
      jsx("path", {
        d: "M17.657 6.343h.01",
      }),
      jsx("path", {
        d: "M17.657 17.657h.01",
      }),
      jsx("path", {
        d: "M6.343 17.657h.01",
      }),
      jsx("path", {
        d: "M6.343 6.343h.01",
      }),
    ],
  });
}
