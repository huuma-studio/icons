import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Bug({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 20v-9",
      }),
      jsx("path", {
        d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",
      }),
      jsx("path", {
        d: "M14.12 3.88 16 2",
      }),
      jsx("path", {
        d: "M21 21a4 4 0 0 0-3.81-4",
      }),
      jsx("path", {
        d: "M21 5a4 4 0 0 1-3.55 3.97",
      }),
      jsx("path", {
        d: "M22 13h-4",
      }),
      jsx("path", {
        d: "M3 21a4 4 0 0 1 3.81-4",
      }),
      jsx("path", {
        d: "M3 5a4 4 0 0 0 3.55 3.97",
      }),
      jsx("path", {
        d: "M6 13H2",
      }),
      jsx("path", {
        d: "m8 2 1.88 1.88",
      }),
      jsx("path", {
        d: "M9 7.13V6a3 3 0 1 1 6 0v1.13",
      }),
    ],
  });
}
