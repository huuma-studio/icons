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
        d: "M13 7H3v2h10V7zm8 4h-2V9h-2V7h-2v2h2v2H3v2h14v2h-2v2h2v-2h2v-2h2v-2zM3 15h10v2H3v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
