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
        d: "M3 3v18h18V3H3zm16 2v14H5V5h14zM7 7h6v6H9v2H7V7zm8 6h-2v2h-2v2h2v-2h2v2h2v-2h-2v-2zm0 0h2v-2h-2v2zM9 9v2h2V9H9z",
        fill: "currentColor",
      }),
    ],
  });
}
