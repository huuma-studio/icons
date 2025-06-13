import type { Props } from "@huuma/ui";
import { jsx } from "@huuma/ui/jsx-runtime";

export default function ({ children: _, ...props }: Props) {
  return jsx("svg", {
    fill: "none",
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      jsx("path", {
        d: "M6 2H4v20h16V2H6zm12 2v16H6V4h12zm-5 12h-2v2h2v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
