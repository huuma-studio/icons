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
        d: "M3 3h18v18H3V3zm2 2v6h8V5H5zm10 0v14h4V5h-4zm-2 14v-2h-3v2h3zm-5 0v-2H5v2h3zm-3-4h3v-2H5v2zm5-2v2h3v-2h-3z",
        fill: "currentColor",
      }),
    ],
  });
}
