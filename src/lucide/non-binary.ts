import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function NonBinary({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 2v10",
      }),
      jsx("path", {
        d: "m8.5 4 7 4",
      }),
      jsx("path", {
        d: "m8.5 8 7-4",
      }),
      jsx("circle", {
        cx: "12",
        cy: "17",
        r: "5",
      }),
    ],
  });
}
