import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ShipWheel({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        r: "8",
      }),
      jsx("path", {
        d: "M12 2v7.5",
      }),
      jsx("path", {
        d: "m19 5-5.23 5.23",
      }),
      jsx("path", {
        d: "M22 12h-7.5",
      }),
      jsx("path", {
        d: "m19 19-5.23-5.23",
      }),
      jsx("path", {
        d: "M12 14.5V22",
      }),
      jsx("path", {
        d: "M10.23 13.77 5 19",
      }),
      jsx("path", {
        d: "M9.5 12H2",
      }),
      jsx("path", {
        d: "M10.23 10.23 5 5",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "2.5",
      }),
    ],
  });
}
