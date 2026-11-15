import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Nfc({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M6 8.32a7.43 7.43 0 0 1 0 7.36",
      }),
      jsx("path", {
        d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58",
      }),
      jsx("path", {
        d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",
      }),
      jsx("path", {
        d: "M16.37 2a20.16 20.16 0 0 1 0 20",
      }),
    ],
  });
}
