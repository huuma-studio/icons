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
        d: "M10 4h6v8H8V4h2zm4 6V6h-4v4h4zM2 6h4v2H2V6zm20 0h-4v2h4V6zm0 4h-4v2h4v-2zM6 10H2v2h4v-2zm-4 4h20v2H2v-2zm20 4H2v2h20v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
