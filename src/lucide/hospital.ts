import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Hospital({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 7v4",
      }),
      jsx("path", {
        d: "M14 21v-3a2 2 0 0 0-4 0v3",
      }),
      jsx("path", {
        d: "M14 9h-4",
      }),
      jsx("path", {
        d: "M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",
      }),
      jsx("path", {
        d: "M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16",
      }),
    ],
  });
}
