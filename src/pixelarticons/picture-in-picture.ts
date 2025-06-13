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
        d: "M2 4h20v16H2V4zm2 2v12h16V6H4zm6 2h8v6h-8V8zm2 2v2h4v-2h-4z",
        fill: "currentColor",
      }),
    ],
  });
}
