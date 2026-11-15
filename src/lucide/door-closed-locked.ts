import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function DoorClosedLocked({
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
        d: "M10 12h.01",
      }),
      jsx("path", {
        d: "M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",
      }),
      jsx("path", {
        d: "M2 20h8",
      }),
      jsx("path", {
        d: "M20 17v-2a2 2 0 1 0-4 0v2",
      }),
      jsx("rect", {
        x: "14",
        y: "17",
        width: "8",
        height: "5",
        rx: "1",
      }),
    ],
  });
}
