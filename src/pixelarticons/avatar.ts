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
        d: "M3 3h18v18H3V3zm16 16V5H5v14h14zM14 7h-4v4h4V7zm1 6H9v2H7v2h2v-2h6v2h2v-2h-2v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
