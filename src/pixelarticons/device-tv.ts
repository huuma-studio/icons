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
        d: "M2 20h20V6h-7V4h-2v2h-2V4H9v2H2v14zM9 4V2H7v2h2zm6 0h2V2h-2v2zm5 4v10H4V8h16z",
        fill: "currentColor",
      }),
    ],
  });
}
