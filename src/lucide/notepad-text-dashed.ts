import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function NotepadTextDashed({
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
        d: "M8 2v4",
      }),
      jsx("path", {
        d: "M12 2v4",
      }),
      jsx("path", {
        d: "M16 2v4",
      }),
      jsx("path", {
        d: "M16 4h2a2 2 0 0 1 2 2v2",
      }),
      jsx("path", {
        d: "M20 12v2",
      }),
      jsx("path", {
        d: "M20 18v2a2 2 0 0 1-2 2h-1",
      }),
      jsx("path", {
        d: "M13 22h-2",
      }),
      jsx("path", {
        d: "M7 22H6a2 2 0 0 1-2-2v-2",
      }),
      jsx("path", {
        d: "M4 14v-2",
      }),
      jsx("path", {
        d: "M4 8V6a2 2 0 0 1 2-2h2",
      }),
      jsx("path", {
        d: "M8 10h6",
      }),
      jsx("path", {
        d: "M8 14h8",
      }),
      jsx("path", {
        d: "M8 18h5",
      }),
    ],
  });
}
