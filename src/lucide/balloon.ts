import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Balloon({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1",
      }),
      jsx("path", {
        d: "M12 6a2 2 0 0 1 2 2",
      }),
      jsx("path", {
        d: "M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0",
      }),
    ],
  });
}
