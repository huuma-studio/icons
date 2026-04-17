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
        d: "M16 4h6v8h-8V4h2zm4 6V6h-4v4h4zm-8-4H2v2h10V6zm0 4H2v2h10v-2zm10 4v2H2v-2h20zm0 6v-2H2v2h20z",
        fill: "currentColor",
      }),
    ],
  });
}
