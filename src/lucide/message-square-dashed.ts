import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function MessageSquareDashed({
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
        d: "M14 3h2",
      }),
      jsx("path", {
        d: "M16 19h-2",
      }),
      jsx("path", {
        d: "M2 12v-2",
      }),
      jsx("path", {
        d: "M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149",
      }),
      jsx("path", {
        d: "M20 19a2 2 0 0 0 2-2v-1",
      }),
      jsx("path", {
        d: "M22 10v2",
      }),
      jsx("path", {
        d: "M22 6V5a2 2 0 0 0-2-2",
      }),
      jsx("path", {
        d: "M4 3a2 2 0 0 0-2 2v1",
      }),
      jsx("path", {
        d: "M8 19h2",
      }),
      jsx("path", {
        d: "M8 3h2",
      }),
    ],
  });
}
