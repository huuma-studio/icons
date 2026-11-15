import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Medal({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
      }),
      jsx("path", {
        d: "M11 12 5.12 2.2",
      }),
      jsx("path", {
        d: "m13 12 5.88-9.8",
      }),
      jsx("path", {
        d: "M8 7h8",
      }),
      jsx("circle", {
        cx: "12",
        cy: "17",
        r: "5",
      }),
      jsx("path", {
        d: "M12 18v-2h-.5",
      }),
    ],
  });
}
