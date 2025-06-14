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
        d: "M11 22h10V8h-2V6h-2v2h-2V6h2V4h-2V2H3v12h2V4h8v6h6v10h-8v2zm-4-2H5v2H3v-2h2v-2H3v-2h2v2h2v-2h2v2H7v2zm0 0h2v2H7v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
