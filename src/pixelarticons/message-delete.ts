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
        d: "M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2h2zm9 7h-2V7H9v2h2v2H9v2h2v-2h2v2h2v-2h-2V9zm0 0V7h2v2h-2z",
        fill: "currentColor",
      }),
    ],
  });
}
