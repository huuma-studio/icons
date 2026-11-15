import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Drum({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m2 2 8 8",
      }),
      jsx("path", {
        d: "m22 2-8 8",
      }),
      jsx("ellipse", {
        cx: "12",
        cy: "9",
        rx: "10",
        ry: "5",
      }),
      jsx("path", {
        d: "M7 13.4v7.9",
      }),
      jsx("path", {
        d: "M12 14v8",
      }),
      jsx("path", {
        d: "M17 13.4v7.9",
      }),
      jsx("path", {
        d: "M2 9v8a10 5 0 0 0 20 0V9",
      }),
    ],
  });
}
