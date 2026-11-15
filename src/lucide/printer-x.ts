import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function PrinterX({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377",
      }),
      jsx("path", {
        d: "m16.5 16.5 5 5",
      }),
      jsx("path", {
        d: "m16.5 21.5 5-5",
      }),
      jsx("path", {
        d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5",
      }),
      jsx("path", {
        d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
      }),
    ],
  });
}
