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
        d: "M22 4v16h-6V4h6Zm-2 2h-2v12h2V6Zm-5 4v10H9V10h6Zm-2 8v-6h-2v6h2Zm-5-4v6H2v-6h6Zm-2 4v-2H4v2h2Z",
      }),
    ],
  });
}
