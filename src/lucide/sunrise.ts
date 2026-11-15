import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Sunrise({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 2v8",
      }),
      jsx("path", {
        d: "m4.93 10.93 1.41 1.41",
      }),
      jsx("path", {
        d: "M2 18h2",
      }),
      jsx("path", {
        d: "M20 18h2",
      }),
      jsx("path", {
        d: "m19.07 10.93-1.41 1.41",
      }),
      jsx("path", {
        d: "M22 22H2",
      }),
      jsx("path", {
        d: "m8 6 4-4 4 4",
      }),
      jsx("path", {
        d: "M16 18a4 4 0 0 0-8 0",
      }),
    ],
  });
}
