import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Gift({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 7v14",
      }),
      jsx("path", {
        d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",
      }),
      jsx("path", {
        d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",
      }),
      jsx("rect", {
        x: "3",
        y: "7",
        width: "18",
        height: "4",
        rx: "1",
      }),
    ],
  });
}
