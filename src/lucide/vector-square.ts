import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function VectorSquare({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M19.5 7a24 24 0 0 1 0 10",
      }),
      jsx("path", {
        d: "M4.5 7a24 24 0 0 0 0 10",
      }),
      jsx("path", {
        d: "M7 19.5a24 24 0 0 0 10 0",
      }),
      jsx("path", {
        d: "M7 4.5a24 24 0 0 1 10 0",
      }),
      jsx("rect", {
        x: "17",
        y: "17",
        width: "5",
        height: "5",
        rx: "1",
      }),
      jsx("rect", {
        x: "17",
        y: "2",
        width: "5",
        height: "5",
        rx: "1",
      }),
      jsx("rect", {
        x: "2",
        y: "17",
        width: "5",
        height: "5",
        rx: "1",
      }),
      jsx("rect", {
        x: "2",
        y: "2",
        width: "5",
        height: "5",
        rx: "1",
      }),
    ],
  });
}
