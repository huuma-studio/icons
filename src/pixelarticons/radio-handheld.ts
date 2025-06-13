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
        d: "M9 2v5h8v15H7V2h2zm0 7v4h6V9H9zm6 6H9v5h6v-5z",
        fill: "currentColor",
      }),
    ],
  });
}
