import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ShelvingUnit({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
      }),
      jsx("path", {
        d: "M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3",
      }),
      jsx("path", {
        d: "M20 22V2",
      }),
      jsx("path", {
        d: "M4 12h16",
      }),
      jsx("path", {
        d: "M4 20h16",
      }),
      jsx("path", {
        d: "M4 2v20",
      }),
      jsx("path", {
        d: "M4 4h16",
      }),
    ],
  });
}
