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
        d: "M11 2h2v2h2v4h2v4h2v6h-2v2h-2v2H9v-2H7v-2H5v-6h2V8h2V4h2V2z",
        fill: "currentColor",
      }),
    ],
  });
}
