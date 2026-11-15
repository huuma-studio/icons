import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function IdCardLanyard({
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
        d: "M13.5 8h-3",
      }),
      jsx("path", {
        d: "m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3",
      }),
      jsx("path", {
        d: "M16.899 22A5 5 0 0 0 7.1 22",
      }),
      jsx("path", {
        d: "m9 2 3 6",
      }),
      jsx("circle", {
        cx: "12",
        cy: "15",
        r: "3",
      }),
    ],
  });
}
