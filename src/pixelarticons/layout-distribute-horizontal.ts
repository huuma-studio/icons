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
        d: "M6 4H4v16h2V4zm14 0h-2v16h2V4zM10 7h6v10H8V7h2zm4 8V9h-4v6h4z",
        fill: "currentColor",
      }),
    ],
  });
}
