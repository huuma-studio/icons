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
        d: "M3 3h10v2H5v14h14v-8h2v10H3V3zm6 8H7v6h2v-6zm2-4h2v10h-2V7zm6 6h-2v4h2v-4zm0-10h2v2h2v2h-2v2h-2V7h-2V5h2V3z",
        fill: "currentColor",
      }),
    ],
  });
}
