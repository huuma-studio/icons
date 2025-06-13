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
        d: "M16 6v10h2v2h-2v2h-2v-2h-2v-2h2V6H4V4h12v2zm-4 10h-2v-2h2v2zm6 0h2v-2h-2v2z",
        fill: "currentColor",
      }),
    ],
  });
}
