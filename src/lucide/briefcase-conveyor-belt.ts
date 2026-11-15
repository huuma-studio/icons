import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BriefcaseConveyorBelt({
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
        d: "M10 20v2",
      }),
      jsx("path", {
        d: "M14 20v2",
      }),
      jsx("path", {
        d: "M18 20v2",
      }),
      jsx("path", {
        d: "M21 20H3",
      }),
      jsx("path", {
        d: "M6 20v2",
      }),
      jsx("path", {
        d: "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12",
      }),
      jsx("rect", {
        x: "4",
        y: "6",
        width: "16",
        height: "10",
        rx: "2",
      }),
    ],
  });
}
