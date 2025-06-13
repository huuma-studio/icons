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
        d: "M18 8H8V6H6v2H4v2h2v2h2v-2h10v10h2V8h-2zM8 12v2h2v-2H8zm0-6V4h2v2H8z",
        fill: "currentColor",
      }),
    ],
  });
}
