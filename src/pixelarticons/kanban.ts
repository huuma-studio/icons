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
        d: "M21 3H3v18h18V3zM5 19V5h14v14H5zM9 7H7v8h2V7zm2 0h2v4h-2V7zm6 0h-2v10h2V7z",
        fill: "currentColor",
      }),
    ],
  });
}
