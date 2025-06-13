import type { Props } from "@huuma/ui";
import { jsx } from "@huuma/ui/jsx-runtime";

export default function ({ children: _, ...props }: Props) {
  return jsx("svg", {
    fill: "none",
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      jsx("path", {
        d: "M21 7h-8v10h8v-2h-6V9h6V7zM3 15V7h8v2H5v6h6v2H3v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
