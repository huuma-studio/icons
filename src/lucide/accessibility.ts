import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Accessibility({
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
        cx: "16",
        cy: "4",
        r: "1",
      }),
      jsx("path", {
        d: "m18 19 1-7-6 1",
      }),
      jsx("path", {
        d: "m5 8 3-3 5.5 3-2.36 3.5",
      }),
      jsx("path", {
        d: "M4.24 14.5a5 5 0 0 0 6.88 6",
      }),
      jsx("path", {
        d: "M13.76 17.5a5 5 0 0 0-6.88-6",
      }),
    ],
  });
}
