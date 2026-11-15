import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Wallpaper({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 17v4",
      }),
      jsx("path", {
        d: "M8 21h8",
      }),
      jsx("path", {
        d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15",
      }),
      jsx("circle", {
        cx: "8",
        cy: "9",
        r: "2",
      }),
      jsx("rect", {
        x: "2",
        y: "3",
        width: "20",
        height: "14",
        rx: "2",
      }),
    ],
  });
}
