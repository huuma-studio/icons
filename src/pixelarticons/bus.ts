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
        d: "M5 2h14v2H5V2zm0 2v6h14V4h2v16h-2v2h-4v-2H9v2H5v-2H3V4h2zm0 14h14v-6H5v6zm2-4h2v2H7v-2zm10 0h-2v2h2v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
