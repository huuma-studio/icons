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
        d: "M11 7h10v2H11V7zm-8 4h2V9h2v2h14v2H7v2H5v-2H3v-2zm4 4v2h2v-2H7zm0-6V7h2v2H7zm14 6H11v2h10v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
