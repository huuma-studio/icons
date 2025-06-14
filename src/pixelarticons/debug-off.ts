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
        d: "M16 2h2v2h-2V2Zm4 7h-2V6h-2V4h-2v2h-2v2h4v5h2v2h4v-2h-4v-2h2V9Zm0 0V7h2v2h-2ZM8 20v-9H6V9H4V7H2v2h2v2h2v2H2v2h4v2H4v2H2v2h2v-2h2v3h10v-2H8Zm2-5h2v2h-2v-2ZM2 2h2v2H2V2Zm4 4H4V4h2v2Zm2 2H6V6h2v2Zm2 2H8V8h2v2Zm0 0v2h2v2h2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2Z",
      }),
    ],
  });
}
