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
        d: "M3 3h2v2H3V3zm4 0h2v2H7V3zm2 16H7v2h2v-2zm2 0h2v2h-2v-2zM5 7H3v2h2V7zm14 0h2v2h-2V7zm2 4h-2v2h2v-2zM3 11h2v2H3v-2zm2 4H3v2h2v-2zm12 0h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2zM5 19H3v2h2v-2zm6-16h2v2h-2V3zm6 0h-2v2h2V3zm4 0h-2v2h2V3z",
        fill: "currentColor",
      }),
    ],
  });
}
