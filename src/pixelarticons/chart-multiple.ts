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
        d: "M3 2H1v16h18V2H3zm0 2h14v12H3V4zm18 2v14H5v2h18V6h-2zM7 8H5v6h2V8zm2-2h2v8H9V6zm6 4h-2v4h2v-4z",
        fill: "currentColor",
      }),
    ],
  });
}
