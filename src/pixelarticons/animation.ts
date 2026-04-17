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
        d: "M4 2H2v12h2V4h10V2H4zm2 4h12v2H8v10H6V6zm4 4h12v12H10V10zm10 10v-8h-8v8h8z",
        fill: "currentColor",
      }),
    ],
  });
}
