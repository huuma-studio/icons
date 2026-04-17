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
        d: "M4 2h4v4H4V2zM1 7h10v9H9v6H7v-6H5v6H3v-6H1V7zm18-5h-2v2h-2v2h-2v2h2V6h2v12h-2v-2h-2v2h2v2h2v2h2v-2h2v-2h2v-2h-2v2h-2V6h2v2h2V6h-2V4h-2V2z",
        fill: "currentColor",
      }),
    ],
  });
}
