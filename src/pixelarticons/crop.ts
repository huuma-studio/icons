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
        d: "M8 2H6v4H2v2h14v14h2v-4h4v-2h-4V6H8V2zm0 8H6v8h8v-2H8v-6z",
        fill: "currentColor",
      }),
    ],
  });
}
