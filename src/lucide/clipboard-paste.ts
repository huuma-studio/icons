import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ClipboardPaste({
  children: _,
  size = 24,
  ...props
}: IconProps): JSX.Element {
  return jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: `${size}`,
    height: `${size}`,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    ...props,
    children: [
      jsx("path", {
        d: "M11 14h10",
      }),
      jsx("path", {
        d: "M16 4h2a2 2 0 0 1 2 2v1.344",
      }),
      jsx("path", {
        d: "m17 18 4-4-4-4",
      }),
      jsx("path", {
        d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",
      }),
      jsx("rect", {
        x: "8",
        y: "2",
        width: "8",
        height: "4",
        rx: "1",
      }),
    ],
  });
}
