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
        d: "M17 4H7v2H5v2H3v12h4v-2h10v2h4V8h-2V6h-2V4zm0 2v2h2v2H5V8h2V6h10zm2 10H5v-4h14v4zm-2-3h-2v2h2v-2zM7 13h2v2H7v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
