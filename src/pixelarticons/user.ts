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
        d: "M15 2H9v2H7v6h2V4h6V2zm0 8H9v2h6v-2zm0-6h2v6h-2V4zM4 16h2v-2h12v2H6v4h12v-4h2v6H4v-6z",
        fill: "currentColor",
      }),
    ],
  });
}
