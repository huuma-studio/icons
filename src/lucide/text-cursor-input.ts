import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TextCursorInput({
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
        d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6",
      }),
      jsx("path", {
        d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",
      }),
      jsx("path", {
        d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",
      }),
      jsx("path", {
        d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1",
      }),
      jsx("path", {
        d: "M9 6v12",
      }),
    ],
  });
}
