import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Shrink({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8",
      }),
      jsx("path", {
        d: "M9 19.8V15m0 0H4.2M9 15l-6 6",
      }),
      jsx("path", {
        d: "M15 4.2V9m0 0h4.8M15 9l6-6",
      }),
      jsx("path", {
        d: "M9 4.2V9m0 0H4.2M9 9 3 3",
      }),
    ],
  });
}
