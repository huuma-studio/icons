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
        d: "M10 2H2v8h3v12h2V10h3v2h2v2h2v8h8v-8h-8v-2h-2v-2h-2V2zM4 8V4h4v4H4zm12 12v-4h4v4h-4z",
        fill: "currentColor",
      }),
    ],
  });
}
