import type { Props } from "@huuma/ui";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ({ children: _, ...props }: Props): JSX.Element {
  return jsx("svg", {
    fill: "none",
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      jsx("path", {
        d: "M11 5H3v2h8V5zm10 0h-8v2h8V5zM3 9h8v2H3V9zm18 0h-8v2h8V9zM3 13h8v2H3v-2zm18 0h-8v2h8v-2zM3 17h8v2H3v-2zm18 0h-8v2h8v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
