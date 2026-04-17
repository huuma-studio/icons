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
        d: "M2 3h20v18H2V3zm18 16V7H4v12h16zm-7-7h3v2h-3v3h-2v-3H8v-2h3V9h2v3z",
        fill: "currentColor",
      }),
    ],
  });
}
