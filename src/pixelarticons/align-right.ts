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
        d: "M4 5h16v2H4V5zm8 4h8v2h-8V9zm-8 4v2h16v-2H4zm8 4h8v2h-8v-2z",
        fill: "currentColor",
      }),
    ],
  });
}