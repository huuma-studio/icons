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
        d: "M16 4H8v12h8V4zm-6 10V6h4v8h-4zm10 6v-2H4v2h16z",
        fill: "currentColor",
      }),
    ],
  });
}
