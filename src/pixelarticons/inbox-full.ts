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
        d: "M3 2h18v20H3V2zm2 2v10h4v2h6v-2h4V4H5zm14 12h-2v2H7v-2H5v4h14v-4zM7 6h10v2H7V6zm0 4h10v2H7v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
