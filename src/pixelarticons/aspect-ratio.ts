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
        d: "M2 4h20v16H2V4zm2 14h16V6H4v12zM8 8h2v2H8v2H6V8h2zm8 8h-2v-2h2v-2h2v4h-2z",
        fill: "currentColor",
      }),
    ],
  });
}
