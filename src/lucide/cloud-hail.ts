import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CloudHail({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
      }),
      jsx("path", {
        d: "M16 14v2",
      }),
      jsx("path", {
        d: "M8 14v2",
      }),
      jsx("path", {
        d: "M16 20h.01",
      }),
      jsx("path", {
        d: "M8 20h.01",
      }),
      jsx("path", {
        d: "M12 16v2",
      }),
      jsx("path", {
        d: "M12 22h.01",
      }),
    ],
  });
}
