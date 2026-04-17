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
        d: "M2 3h20v14h-7v3h-2v-2h-2v2H9v-3H2V3zm2 2v4h16V5H4zm16 8H4v2h16v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
