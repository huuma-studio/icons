import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function GitCompareArrows({
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
        cx: "5",
        cy: "6",
        r: "3",
      }),
      jsx("path", {
        d: "M12 6h5a2 2 0 0 1 2 2v7",
      }),
      jsx("path", {
        d: "m15 9-3-3 3-3",
      }),
      jsx("circle", {
        cx: "19",
        cy: "18",
        r: "3",
      }),
      jsx("path", {
        d: "M12 18H7a2 2 0 0 1-2-2V9",
      }),
      jsx("path", {
        d: "m9 15 3 3-3 3",
      }),
    ],
  });
}
