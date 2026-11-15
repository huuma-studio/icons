import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function UnfoldHorizontal({
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
        d: "M16 12h6",
      }),
      jsx("path", {
        d: "M8 12H2",
      }),
      jsx("path", {
        d: "M12 2v2",
      }),
      jsx("path", {
        d: "M12 8v2",
      }),
      jsx("path", {
        d: "M12 14v2",
      }),
      jsx("path", {
        d: "M12 20v2",
      }),
      jsx("path", {
        d: "m19 15 3-3-3-3",
      }),
      jsx("path", {
        d: "m5 9-3 3 3 3",
      }),
    ],
  });
}
