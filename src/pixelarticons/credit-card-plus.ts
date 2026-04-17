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
        d: "M2 4h18v2H4v2h16v4H4v6h10v2H2V4zm20 0h-2v8h2V4zm-4 10h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
