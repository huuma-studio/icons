import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BoomBox({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",
      }),
      jsx("path", {
        d: "M8 8v1",
      }),
      jsx("path", {
        d: "M12 8v1",
      }),
      jsx("path", {
        d: "M16 8v1",
      }),
      jsx("rect", {
        width: "20",
        height: "12",
        x: "2",
        y: "9",
        rx: "2",
      }),
      jsx("circle", {
        cx: "8",
        cy: "15",
        r: "2",
      }),
      jsx("circle", {
        cx: "16",
        cy: "15",
        r: "2",
      }),
    ],
  });
}
