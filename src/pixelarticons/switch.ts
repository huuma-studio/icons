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
        d: "M3 5V3h2v2H3zm4 2H5V5h2v2zm2 2H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2h2v2h2v2h2v2h-2v2h6v-6h-2v2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0-2v2h2v2h2V3h-6v2h2zM5 19v-2h2v2H5zm0 0v2H3v-2h2zm2-2v-2h2v2H7z",
        fill: "currentColor",
      }),
    ],
  });
}
