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
        d: "M3 7h2v4h4V7h2v10H9v-4H5v4H3V7zm10 2h2v6h-2V9zm6 6h-4v2h8v-2h-2V9h-2V7h-4v2h4v6z",
        fill: "currentColor",
      }),
    ],
  });
}
