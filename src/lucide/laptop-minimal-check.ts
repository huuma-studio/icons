import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function LaptopMinimalCheck({
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
        d: "M2 20h20",
      }),
      jsx("path", {
        d: "m9 10 2 2 4-4",
      }),
      jsx("rect", {
        x: "3",
        y: "4",
        width: "18",
        height: "12",
        rx: "2",
      }),
    ],
  });
}
