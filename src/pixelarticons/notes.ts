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
        d: "M5 2h16v20H3V2h2zm14 18V4H5v16h14zM7 6h10v2H7V6zm10 4H7v2h10v-2zM7 14h7v2H7v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
