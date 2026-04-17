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
        d: "M8 3h8v4h6v4h-2V9H4v10h8v2H2V7h6V3zm2 4h4V5h-4v2zm7 14h2v-3h3v-2h-3v-3h-2v3h-3v2h3v3z",
        fill: "currentColor",
      }),
    ],
  });
}
