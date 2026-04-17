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
        d: "M11 2h2v4h6v2H7v3H5V6h6V2zM5 18h6v4h2v-4h6v-2H5v2zm14-7H5v2h12v3h2v-5z",
        fill: "currentColor",
      }),
    ],
  });
}
