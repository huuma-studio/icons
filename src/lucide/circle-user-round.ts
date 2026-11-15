import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CircleUserRound({
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
      jsx("path", {
        d: "M17.925 20.056a6 6 0 0 0-11.851.001",
      }),
      jsx("circle", {
        cx: "12",
        cy: "11",
        r: "4",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "10",
      }),
    ],
  });
}
