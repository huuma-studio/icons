import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BookDashed({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 17h1.5",
      }),
      jsx("path", {
        d: "M12 22h1.5",
      }),
      jsx("path", {
        d: "M12 2h1.5",
      }),
      jsx("path", {
        d: "M17.5 22H19a1 1 0 0 0 1-1",
      }),
      jsx("path", {
        d: "M17.5 2H19a1 1 0 0 1 1 1v1.5",
      }),
      jsx("path", {
        d: "M20 14v3h-2.5",
      }),
      jsx("path", {
        d: "M20 8.5V10",
      }),
      jsx("path", {
        d: "M4 10V8.5",
      }),
      jsx("path", {
        d: "M4 19.5V14",
      }),
      jsx("path", {
        d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H8",
      }),
      jsx("path", {
        d: "M8 22H6.5a1 1 0 0 1 0-5H8",
      }),
    ],
  });
}
