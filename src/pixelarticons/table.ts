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
        d: "M2 3h20v18H2V3zm2 4v5h7V7H4zm9 0v5h7V7h-7zm7 7h-7v5h7v-5zm-9 5v-5H4v5h7z",
        fill: "currentColor",
      }),
    ],
  });
}
