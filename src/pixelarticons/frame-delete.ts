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
        d: "M2 3h20v18H2V3zm18 16V7H4v12h16zM9 10h2v2H9v-2zm4 2h-2v2H9v2h2v-2h2v2h2v-2h-2v-2zm0 0v-2h2v2h-2z",
        fill: "currentColor",
      }),
    ],
  });
}
