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
        d: "M7 3h10v2h5v16H2V7h2v12h16V7h-5V5H9v2H2V5h5V3zm7 12h-4v2h4v-2zm-4-2v2H8v-2h2zm0-2V9H8v2h2zm6 2v2h-2v-2h2zm0-2V9h-2v2h2z",
        fill: "currentColor",
      }),
    ],
  });
}
