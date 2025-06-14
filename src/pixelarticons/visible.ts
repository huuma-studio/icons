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
        fill: "currentColor",
        d: "M0 0h2v2H0V0Zm2 2h2v2H2V2Zm18 0h2v2h-2V2Zm2-2h2v2h-2V0ZM2 20h2v2H2v-2Zm-2 2h2v2H0v-2Zm20-2h2v2h-2v-2Zm2 2h2v2h-2v-2ZM8 17h8v2H8v-2Zm8-2h4v2h-4v-2Zm-8 0H4v2h4v-2Zm8-8h4v2h-4V7ZM8 7H4v2h4V7Zm12 2h2v2h-2V9ZM4 9H2v2h2V9Zm18 2h2v2h-2v-2ZM2 11H0v2h2v-2Zm18 2h2v2h-2v-2ZM4 13H2v2h2v-2Zm4-8h8v2H8V5Zm2 5h4v4h-4v-4Z",
      }),
    ],
  });
}
