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
        d: "M4 3h20v14H4V3zm18 12V5H6v10h16zm-2 4H2V7H0v14h20v-2zM9 7h2v2H9V7zm3 4H8v2h4v-2zm2-4h6v2h-6V7zm6 4h-6v2h6v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
