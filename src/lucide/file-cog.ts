import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function FileCog({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z",
      }),
      jsx("path", {
        d: "M20 8v12a2 2 0 0 1-2 2h-4.182",
      }),
      jsx("path", {
        d: "m3.305 19.53.923-.382",
      }),
      jsx("path", {
        d: "M4 10.592V4a2 2 0 0 1 2-2h8",
      }),
      jsx("path", {
        d: "m4.228 16.852-.924-.383",
      }),
      jsx("path", {
        d: "m5.852 15.228-.383-.923",
      }),
      jsx("path", {
        d: "m5.852 20.772-.383.924",
      }),
      jsx("path", {
        d: "m8.148 15.228.383-.923",
      }),
      jsx("path", {
        d: "m8.53 21.696-.382-.924",
      }),
      jsx("path", {
        d: "m9.773 16.852.922-.383",
      }),
      jsx("path", {
        d: "m9.773 19.148.922.383",
      }),
      jsx("circle", {
        cx: "7",
        cy: "18",
        r: "3",
      }),
    ],
  });
}
