import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Merge({ children: _, size = 24, ...props }: IconProps): JSX.Element {
  return jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: `${size}`,
    height: `${size}`,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    ...props,
    children: [
      jsx("path", {
        d: "m8 6 4-4 4 4",
      }),
      jsx("path", {
        d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",
      }),
      jsx("path", {
        d: "m20 22-5-5",
      }),
    ],
  });
}
