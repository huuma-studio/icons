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
        d: "M10 7H3v6h5v2H3v2h7v-6H5V9h5V7zm11 0h-9v10h9v-6h-4v2h2v2h-5V9h7V7z",
        fill: "currentColor",
      }),
    ],
  });
}
