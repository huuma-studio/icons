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
        d: "M8 6v10H6v2h2v2h2v-2h2v-2h-2V6h10V4H8v2zm4 10h2v-2h-2v2zm-6 0H4v-2h2v2z",
        fill: "currentColor",
      }),
    ],
  });
}
