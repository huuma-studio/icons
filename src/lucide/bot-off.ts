import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BotOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M13.67 8H18a2 2 0 0 1 2 2v4.33",
      }),
      jsx("path", {
        d: "M2 14h2",
      }),
      jsx("path", {
        d: "M20 14h2",
      }),
      jsx("path", {
        d: "M22 22 2 2",
      }),
      jsx("path", {
        d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586",
      }),
      jsx("path", {
        d: "M9 13v2",
      }),
      jsx("path", {
        d: "M9.67 4H12v2.33",
      }),
    ],
  });
}
