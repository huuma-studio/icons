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
        d: "M2 2h8v8H7v12H5V10H2V2zm2 2v4h4V4H4zm8 1h7.09v9H22v8h-8v-8h3.09V7H12V5zm4 11v4h4v-4h-4z",
        fill: "currentColor",
      }),
    ],
  });
}
