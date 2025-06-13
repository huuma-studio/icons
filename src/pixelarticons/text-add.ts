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
        d: "M19 4H3v2h16V4zm0 4H3v2h16V8zM3 12h8v2H3v-2zm8 4H3v2h8v-2zm7-1h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z",
        fill: "currentColor",
      }),
    ],
  });
}
