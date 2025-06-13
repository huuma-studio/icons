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
        d: "M20 2h-2v4H6v2H4v8h2v2h2v4h8v-2h4v-2h-4v-2h4v-2h-4v-2H8v4H6V8h12V6h2V2zm-6 18h-4v-6h4v6z",
        fill: "currentColor",
      }),
    ],
  });
}
