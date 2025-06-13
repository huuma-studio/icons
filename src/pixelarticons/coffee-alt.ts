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
        d: "M7 3H5v4h2V3zm4 0H9v4h2V3zm2 0h2v4h-2V3zm8 6H3v12h14v-5h4V9zm-2 5h-2v-3h2v3zM5 11h10v8H5v-8z",
        fill: "currentColor",
      }),
    ],
  });
}
