import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Drone({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M10 10 7 7",
      }),
      jsx("path", {
        d: "m10 14-3 3",
      }),
      jsx("path", {
        d: "m14 10 3-3",
      }),
      jsx("path", {
        d: "m14 14 3 3",
      }),
      jsx("path", {
        d: "M14.205 4.139a4 4 0 1 1 5.439 5.863",
      }),
      jsx("path", {
        d: "M19.637 14a4 4 0 1 1-5.432 5.868",
      }),
      jsx("path", {
        d: "M4.367 10a4 4 0 1 1 5.438-5.862",
      }),
      jsx("path", {
        d: "M9.795 19.862a4 4 0 1 1-5.429-5.873",
      }),
      jsx("rect", {
        x: "10",
        y: "8",
        width: "4",
        height: "8",
        rx: "1",
      }),
    ],
  });
}
