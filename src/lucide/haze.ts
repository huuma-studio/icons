import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Haze({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m5.2 6.2 1.4 1.4",
      }),
      jsx("path", {
        d: "M2 13h2",
      }),
      jsx("path", {
        d: "M20 13h2",
      }),
      jsx("path", {
        d: "m17.4 7.6 1.4-1.4",
      }),
      jsx("path", {
        d: "M22 17H2",
      }),
      jsx("path", {
        d: "M22 21H2",
      }),
      jsx("path", {
        d: "M16 13a4 4 0 0 0-8 0",
      }),
      jsx("path", {
        d: "M12 5V2.5",
      }),
    ],
  });
}
