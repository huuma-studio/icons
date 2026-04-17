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
        d: "M3 3h18v18H3V3zm2 2v2h14V5H5zm14 4h-6v2h6V9zm0 4h-6v2h6v-2zm0 4h-6v2h6v-2zm-8 2v-2H5v2h6zm-6-4h6v-2H5v2zm0-4h6V9H5v2z",
        fill: "currentColor",
      }),
    ],
  });
}
