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
        d: "M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4v-2h2v-2h2v8h-2v-4h-2Zm-6 0h6v2h-6v-2Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Zm8-10h2v2h2v2h-2v2h-2V6h-2V4h2V2Z",
      }),
    ],
  });
}
