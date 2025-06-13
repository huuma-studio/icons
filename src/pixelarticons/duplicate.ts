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
        d: "M5 3h12v4h4v14H7v-4H3V3h2zm10 4V5H5v10h2V7h8zM9 17v2h10V9H9v8z",
        fill: "currentColor",
      }),
    ],
  });
}
