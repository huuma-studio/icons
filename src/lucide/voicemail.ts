import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Voicemail({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        cx: "6",
        cy: "12",
        r: "4",
      }),
      jsx("circle", {
        cx: "18",
        cy: "12",
        r: "4",
      }),
      jsx("line", {
        x1: "6",
        x2: "18",
        y1: "16",
        y2: "16",
      }),
    ],
  });
}
