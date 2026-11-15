import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BriefcaseMedical({
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
        d: "M12 11v4",
      }),
      jsx("path", {
        d: "M14 13h-4",
      }),
      jsx("path", {
        d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
      }),
      jsx("path", {
        d: "M18 6v14",
      }),
      jsx("path", {
        d: "M6 6v14",
      }),
      jsx("rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "6",
        rx: "2",
      }),
    ],
  });
}
