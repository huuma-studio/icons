import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function PowerOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M18.36 6.64A9 9 0 0 1 20.77 15",
      }),
      jsx("path", {
        d: "M6.16 6.16a9 9 0 1 0 12.68 12.68",
      }),
      jsx("path", {
        d: "M12 2v4",
      }),
      jsx("path", {
        d: "m2 2 20 20",
      }),
    ],
  });
}
