import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ({ children: _, size = 24, ...props }: IconProps): JSX.Element {
  return jsx("svg", {
    fill: "none",
    width: `${size}`,
    height: `${size}`,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      jsx("path", {
        d: "M17 2h-2v2H9V2H7v2H3v8h2v-2h14v10h-8v2h10V4h-4V2zm2 6H5V6h14v2zm-6 8H7v-2h2v-2H7v2H5v2H3v2h2v2h2v2h2v-2H7v-2h6v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
