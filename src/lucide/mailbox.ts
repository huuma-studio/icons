import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Mailbox({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",
      }),
      jsx("polyline", {
        points: "15,9 18,9 18,11",
      }),
      jsx("path", {
        d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2",
      }),
      jsx("line", {
        x1: "6",
        x2: "7",
        y1: "10",
        y2: "10",
      }),
    ],
  });
}
