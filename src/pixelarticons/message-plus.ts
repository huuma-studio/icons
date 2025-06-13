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
        d: "M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2h-2zm-7 7h3v2h-3v3h-2v-3H8V9h3V6h2v3z",
        fill: "currentColor",
      }),
    ],
  });
}
