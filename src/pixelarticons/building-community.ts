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
        d: "M20 2h2v20H2v-8h2v6h4v-4h2v4h4v-6h2v6h4V4H10v2H8V2h12zm-8 10h2v2h-2v-2zm-2-2h2v2h-2v-2zm-2 0V8h2v2H8zm-2 2v-2h2v2H6zm0 0H4v2h2v-2zm10-6h2v2h-2V6zm-2 0h-2v2h2V6zm2 4h2v2h-2v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
