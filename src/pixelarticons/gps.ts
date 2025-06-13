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
        d: "M13 2v4h5v5h4v2h-4v5h-5v4h-2v-4H6v-5H2v-2h4V6h5V2h2zM8 8v8h8V8H8zm2 2h4v4h-4v-4z",
        fill: "currentColor",
      }),
    ],
  });
}
