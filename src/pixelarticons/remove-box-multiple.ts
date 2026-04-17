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
        d: "M5 3H3v14h14V3H5zm10 2v10H5V5h10zm4 2v12H7v2h14V7h-2zm-6 2H7v2h6V9z",
        fill: "currentColor",
      }),
    ],
  });
}
