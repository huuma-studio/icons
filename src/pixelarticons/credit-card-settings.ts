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
        d: "M20 4H2v16h18v-2H4v-6h16V8H4V6h16V4zm0 0h2v16h-2V4zm-7 18h-2v2h2v-2zm2 0h2v2h-2v-2zm-6 0H7v2h2v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
