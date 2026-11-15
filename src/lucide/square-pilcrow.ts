import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SquarePilcrow({
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
      jsx("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
      }),
      jsx("path", {
        d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17",
      }),
      jsx("path", {
        d: "M12 7v10",
      }),
      jsx("path", {
        d: "M16 7v10",
      }),
    ],
  });
}
