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
        d: "M0 4h2v12h10V8h10v2h-8v6h8v-6h2v10h-2v-2H2v2H0V4zm3 5h2v4H3V9zm6 4v2H5v-2h4zm0-4h2v4H9V9zm0 0H5V7h4v2z",
        fill: "currentColor",
      }),
    ],
  });
}
