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
        d: "M13 22h8V8h-2V6h-2v2h-2V6h2V4h-2V2H3v13h2V4h8v6h6v10h-6v2zm-2-3H3v-2h8v2z",
        fill: "currentColor",
      }),
    ],
  });
}
