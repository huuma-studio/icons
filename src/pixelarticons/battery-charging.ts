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
        d: "M4 5H2v14h6v-2H4V7h4V5H4zm10 0h6v4h2v6h-2v4h-6v-2h4V7h-4V5zm-4 2h2v4h4v2h-2v2h-2v2h-2v-4H6v-2h2V9h2V7z",
        fill: "currentColor",
      }),
    ],
  });
}
