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
        d: "M15 9V7h2v2h-2zm2 6v-2h-4v-2h4V9h2v2h2v2h-2v2h-2zm0 0v2h-2v-2h2zm-6-4v2H7v2H5v-2H3v-2h2V9h2v2h4zm-4 4h2v2H7v-2zm2-8v2H7V7h2z",
        fill: "currentColor",
      }),
    ],
  });
}
