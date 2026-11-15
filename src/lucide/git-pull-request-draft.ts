import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function GitPullRequestDraft({
  children: _,
  size = 24,
  ...props
}: IconProps): JSX.Element {
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
        cx: "18",
        cy: "18",
        r: "3",
      }),
      jsx("circle", {
        cx: "6",
        cy: "6",
        r: "3",
      }),
      jsx("path", {
        d: "M18 6V5",
      }),
      jsx("path", {
        d: "M18 11v-1",
      }),
      jsx("line", {
        x1: "6",
        x2: "6",
        y1: "9",
        y2: "21",
      }),
    ],
  });
}
