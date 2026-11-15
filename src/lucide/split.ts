import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Split({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M16 3h5v5",
      }),
      jsx("path", {
        d: "M8 3H3v5",
      }),
      jsx("path", {
        d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",
      }),
      jsx("path", {
        d: "m15 9 6-6",
      }),
    ],
  });
}
