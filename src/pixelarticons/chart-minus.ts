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
        d: "M13 3H3v18h18V11h-2v8H5V5h8V3zm-6 8h2v6H7v-6zm6-4h-2v10h2V7zm2 6h2v4h-2v-4zm6-8h-6v2h6V5z",
        fill: "currentColor",
      }),
    ],
  });
}
