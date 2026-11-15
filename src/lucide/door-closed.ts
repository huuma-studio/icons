import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function DoorClosed({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",
      }),
      jsx("path", {
        d: "M2 20h20",
      }),
    ],
  });
}
