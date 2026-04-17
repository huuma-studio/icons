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
        d: "M5 2h16v20H3V2h2zm14 18V4H5v16h14zM13 6H7v2h6V6zm-6 4h10v8H7v-8z",
        fill: "currentColor",
      }),
    ],
  });
}
