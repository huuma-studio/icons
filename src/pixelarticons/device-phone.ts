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
        d: "M6 3h12v18H6V3zm10 16V5h-2v2h-4V5H8v14h8zm-5-4h2v2h-2v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
