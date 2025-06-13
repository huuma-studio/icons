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
        d: "M15 2h2v20h-2v-2h-2v-2h2V6h-2V4h2V2zm-4 6V6h2v2h-2zm-2 2h2V8H7v8h4v2h2v-2h-2v-2H9v-4z",
        fill: "currentColor",
      }),
    ],
  });
}
