import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ReplyAll({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m12 17-5-5 5-5",
      }),
      jsx("path", {
        d: "M22 18v-2a4 4 0 0 0-4-4H7",
      }),
      jsx("path", {
        d: "m7 17-5-5 5-5",
      }),
    ],
  });
}
