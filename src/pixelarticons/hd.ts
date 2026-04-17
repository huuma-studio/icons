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
        d: "M3 7h2v4h4V7h2v10H9v-4H5v4H3V7zm10 8V7h6v2h-4v6h4v2h-6v-2zm6 0V9h2v6h-2z",
        fill: "currentColor",
      }),
    ],
  });
}
