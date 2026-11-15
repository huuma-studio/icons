import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function FoldVertical({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 22v-6",
      }),
      jsx("path", {
        d: "M12 8V2",
      }),
      jsx("path", {
        d: "M4 12H2",
      }),
      jsx("path", {
        d: "M10 12H8",
      }),
      jsx("path", {
        d: "M16 12h-2",
      }),
      jsx("path", {
        d: "M22 12h-2",
      }),
      jsx("path", {
        d: "m15 19-3-3-3 3",
      }),
      jsx("path", {
        d: "m15 5-3 3-3-3",
      }),
    ],
  });
}
