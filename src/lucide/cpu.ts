import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Cpu({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 20v2",
      }),
      jsx("path", {
        d: "M12 2v2",
      }),
      jsx("path", {
        d: "M17 20v2",
      }),
      jsx("path", {
        d: "M17 2v2",
      }),
      jsx("path", {
        d: "M2 12h2",
      }),
      jsx("path", {
        d: "M2 17h2",
      }),
      jsx("path", {
        d: "M2 7h2",
      }),
      jsx("path", {
        d: "M20 12h2",
      }),
      jsx("path", {
        d: "M20 17h2",
      }),
      jsx("path", {
        d: "M20 7h2",
      }),
      jsx("path", {
        d: "M7 20v2",
      }),
      jsx("path", {
        d: "M7 2v2",
      }),
      jsx("rect", {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "2",
      }),
      jsx("rect", {
        x: "8",
        y: "8",
        width: "8",
        height: "8",
        rx: "1",
      }),
    ],
  });
}
