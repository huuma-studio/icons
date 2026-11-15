import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Hotel({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10 22v-6.57",
      }),
      jsx("path", {
        d: "M12 11h.01",
      }),
      jsx("path", {
        d: "M12 7h.01",
      }),
      jsx("path", {
        d: "M14 15.43V22",
      }),
      jsx("path", {
        d: "M15 16a5 5 0 0 0-6 0",
      }),
      jsx("path", {
        d: "M16 11h.01",
      }),
      jsx("path", {
        d: "M16 7h.01",
      }),
      jsx("path", {
        d: "M8 11h.01",
      }),
      jsx("path", {
        d: "M8 7h.01",
      }),
      jsx("rect", {
        x: "4",
        y: "2",
        width: "16",
        height: "20",
        rx: "2",
      }),
    ],
  });
}
