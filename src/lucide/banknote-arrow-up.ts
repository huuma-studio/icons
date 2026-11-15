import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BanknoteArrowUp({
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
        d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",
      }),
      jsx("path", {
        d: "M18 12h.01",
      }),
      jsx("path", {
        d: "M19 22v-6",
      }),
      jsx("path", {
        d: "m22 19-3-3-3 3",
      }),
      jsx("path", {
        d: "M6 12h.01",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "2",
      }),
    ],
  });
}
