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
        d: "M21 3h-8v2h4v2h2v4h2V3zm-4 4h-2v2h-2v2h2V9h2V7zm-8 8h2v-2H9v2H7v2h2v-2zm-4-2v4h2v2H5h6v2H3v-8h2z",
        fill: "currentColor",
      }),
    ],
  });
}
