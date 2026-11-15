import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Logs({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M3 5h1",
      }),
      jsx("path", {
        d: "M3 12h1",
      }),
      jsx("path", {
        d: "M3 19h1",
      }),
      jsx("path", {
        d: "M8 5h1",
      }),
      jsx("path", {
        d: "M8 12h1",
      }),
      jsx("path", {
        d: "M8 19h1",
      }),
      jsx("path", {
        d: "M13 5h8",
      }),
      jsx("path", {
        d: "M13 12h8",
      }),
      jsx("path", {
        d: "M13 19h8",
      }),
    ],
  });
}
