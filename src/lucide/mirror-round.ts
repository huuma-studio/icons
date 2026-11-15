import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function MirrorRound({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10 6.6 8.6 8",
      }),
      jsx("path", {
        d: "M12 18v4",
      }),
      jsx("path", {
        d: "M15 7.5 9.5 13",
      }),
      jsx("path", {
        d: "M7 22h10",
      }),
      jsx("circle", {
        cx: "12",
        cy: "10",
        r: "8",
      }),
    ],
  });
}
