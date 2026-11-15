import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Speaker({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("rect", {
        width: "16",
        height: "20",
        x: "4",
        y: "2",
        rx: "2",
      }),
      jsx("path", {
        d: "M12 6h.01",
      }),
      jsx("circle", {
        cx: "12",
        cy: "14",
        r: "4",
      }),
      jsx("path", {
        d: "M12 14h.01",
      }),
    ],
  });
}
