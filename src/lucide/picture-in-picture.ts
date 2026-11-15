import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function PictureInPicture({
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
        d: "M2 10h6V4",
      }),
      jsx("path", {
        d: "m2 4 6 6",
      }),
      jsx("path", {
        d: "M21 10V7a2 2 0 0 0-2-2h-7",
      }),
      jsx("path", {
        d: "M3 14v2a2 2 0 0 0 2 2h3",
      }),
      jsx("rect", {
        x: "12",
        y: "14",
        width: "10",
        height: "7",
        rx: "1",
      }),
    ],
  });
}
