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
        d: "M10 5H8v2H4V5H2v2H0v12h12V7h-2V5zM2 9h8v2H2V9zm0 8v-4h8v4H2zM20 7h-2v8h-2v-2h-2v2h2v2h2v2h2v-2h2v-2h2v-2h-2v2h-2V7z",
        fill: "currentColor",
      }),
    ],
  });
}
