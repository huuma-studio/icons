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
        d: "M3 8h4m0 0V6h4v2M7 8v2h4V8m0 0h10M3 16h10m0 0v-2h4v2m-4 0v2h4v-2m0 0h4",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "square",
      }),
    ],
  });
}
