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
        d: "M13 5h2v14h-2V5zm-2 4H9v10h2V9zm-4 4H5v6h2v-6zm12 0h-2v6h2v-6z",
        fill: "currentColor",
      }),
    ],
  });
}
