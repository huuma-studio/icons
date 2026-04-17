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
        d: "M6 2h12v6h4v10h-4v4H6v-4H2V8h4V2zm2 6h8V4H8v4zm-2 8v-4h12v4h2v-6H4v6h2zm2-2v6h8v-6H8z",
        fill: "currentColor",
      }),
    ],
  });
}
