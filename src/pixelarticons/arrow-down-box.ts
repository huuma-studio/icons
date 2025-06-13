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
        d: "M3 3h18v18H3V3zm16 16V5H5v14h14zM11 7h2v6h2v2h-2v2h-2v-2H9v-2h2V7zm-2 4v2H7v-2h2zm8 0h-2v2h2v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
