import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TouchpadOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 20v-6",
      }),
      jsx("path", {
        d: "M19.656 14H22",
      }),
      jsx("path", {
        d: "M2 14h12",
      }),
      jsx("path", {
        d: "m2 2 20 20",
      }),
      jsx("path", {
        d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",
      }),
      jsx("path", {
        d: "M9.656 4H20a2 2 0 0 1 2 2v10.344",
      }),
    ],
  });
}
