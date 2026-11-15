import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TowerControl({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",
      }),
      jsx("path", {
        d: "M8 13v9",
      }),
      jsx("path", {
        d: "M16 22v-9",
      }),
      jsx("path", {
        d: "m9 6 1 7",
      }),
      jsx("path", {
        d: "m15 6-1 7",
      }),
      jsx("path", {
        d: "M12 6V2",
      }),
      jsx("path", {
        d: "M13 2h-2",
      }),
    ],
  });
}
