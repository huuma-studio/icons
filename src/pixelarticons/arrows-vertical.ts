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
        d: "M11 11h2V7h2v2h2V7h-2V5h-2V3h-2v2H9v2H7v2h2V7h2v4zm0 2h2v4h2v2h-2v2h-2v-2H9v-2h2v-4zm-2 4v-2H7v2h2zm6 0v-2h2v2h-2z",
        fill: "currentColor",
      }),
    ],
  });
}
