import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function WashingMachine({
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
        d: "M3 6h3",
      }),
      jsx("path", {
        d: "M17 6h.01",
      }),
      jsx("rect", {
        width: "18",
        height: "20",
        x: "3",
        y: "2",
        rx: "2",
      }),
      jsx("circle", {
        cx: "12",
        cy: "13",
        r: "5",
      }),
      jsx("path", {
        d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",
      }),
    ],
  });
}
