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
        d: "M22 2h-6v6h6V2zM4 4h10v2H4v12h16v-8h2v10H2V4h2zm4 4H6v2h2v2h2v2h4v-2h2v-2h-2v2h-4v-2H8V8z",
        fill: "currentColor",
      }),
    ],
  });
}
