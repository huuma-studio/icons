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
        d: "M5 3H3v2h2V3zm4 0H7v2h2V3zM7 19h2v2H7v-2zM5 7H3v2h2V7zm14 0h2v2h-2V7zM5 11H3v2h2v-2zm14 0h2v2h-2v-2zM5 15H3v2h2v-2zm14 0h2v2h-2v-2zM5 19H3v2h2v-2zm6-16h2v2h-2V3zm2 16h-2v2h2v-2zm2-16h2v2h-2V3zm2 16h-2v2h2v-2zm2-16h2v2h-2V3zm2 16h-2v2h2v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
