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
        d: "M21 3H3v18h18V3zM5 19V5h14v14H5zM9 7H7v2h2V7zm8 8H7v2h10v-2zm-2-8h2v2h-2V7zm-2 0h-2v2h2V7zm-6 4h2v2H7v-2zm10 0h-2v2h2v-2zm-6 0h2v2h-2v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
