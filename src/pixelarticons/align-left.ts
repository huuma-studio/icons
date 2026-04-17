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
        d: "M20 5H4v2h16V5zm-8 4H4v2h8V9zm8 4v2H4v-2h16zm-8 4H4v2h8v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
