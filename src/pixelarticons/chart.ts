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
        d: "M5 3H3v18h18V3H5zm14 2v14H5V5h14zM9 11H7v6h2v-6zm2-4h2v10h-2V7zm6 6h-2v4h2v-4z",
        fill: "currentColor",
      }),
    ],
  });
}
