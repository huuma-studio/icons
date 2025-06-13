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
        d: "M12 19h-2v-2H8v-2H6v-2H4v-2h2V9h2V7h2V5h2v4h8v6h-8v4z",
        fill: "currentColor",
      }),
    ],
  });
}
