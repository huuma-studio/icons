import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CaptionsOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10.5 5H19a2 2 0 0 1 2 2v8.5",
      }),
      jsx("path", {
        d: "M17 11h-.5",
      }),
      jsx("path", {
        d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",
      }),
      jsx("path", {
        d: "m2 2 20 20",
      }),
      jsx("path", {
        d: "M7 11h4",
      }),
      jsx("path", {
        d: "M7 15h2.5",
      }),
    ],
  });
}
