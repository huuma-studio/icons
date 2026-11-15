import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function GitBranch({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M15 6a9 9 0 0 0-9 9V3",
      }),
      jsx("circle", {
        cx: "18",
        cy: "6",
        r: "3",
      }),
      jsx("circle", {
        cx: "6",
        cy: "18",
        r: "3",
      }),
    ],
  });
}
