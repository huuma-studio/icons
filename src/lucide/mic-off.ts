import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function MicOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 19v3",
      }),
      jsx("path", {
        d: "M15 9.34V5a3 3 0 0 0-5.68-1.33",
      }),
      jsx("path", {
        d: "M16.95 16.95A7 7 0 0 1 5 12v-2",
      }),
      jsx("path", {
        d: "M18.89 13.23A7 7 0 0 0 19 12v-2",
      }),
      jsx("path", {
        d: "m2 2 20 20",
      }),
      jsx("path", {
        d: "M9 9v3a3 3 0 0 0 5.12 2.12",
      }),
    ],
  });
}
