import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ImagePlus({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M16 5h6",
      }),
      jsx("path", {
        d: "M19 2v6",
      }),
      jsx("path", {
        d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
      }),
      jsx("path", {
        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
      }),
      jsx("circle", {
        cx: "9",
        cy: "9",
        r: "2",
      }),
    ],
  });
}
