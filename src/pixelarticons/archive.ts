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
        d: "M22 4H2v6h2v10h16V10h2V4zM6 10h12v8H6v-8zm14-4v2H4V6h16zm-5 6H9v2h6v-2z",
        fill: "currentColor",
      }),
    ],
  });
}
