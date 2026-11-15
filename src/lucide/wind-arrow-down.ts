import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function WindArrowDown({
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
        d: "M10 2v8",
      }),
      jsx("path", {
        d: "M12.8 21.6A2 2 0 1 0 14 18H2",
      }),
      jsx("path", {
        d: "M17.5 10a2.5 2.5 0 1 1 2 4H2",
      }),
      jsx("path", {
        d: "m6 6 4 4 4-4",
      }),
    ],
  });
}
