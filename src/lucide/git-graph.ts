import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function GitGraph({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("circle", {
        cx: "5",
        cy: "6",
        r: "3",
      }),
      jsx("path", {
        d: "M5 9v6",
      }),
      jsx("circle", {
        cx: "5",
        cy: "18",
        r: "3",
      }),
      jsx("path", {
        d: "M12 3v18",
      }),
      jsx("circle", {
        cx: "19",
        cy: "6",
        r: "3",
      }),
      jsx("path", {
        d: "M16 15.7A9 9 0 0 0 19 9",
      }),
    ],
  });
}
