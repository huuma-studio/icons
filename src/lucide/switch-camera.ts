import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SwitchCamera({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",
      }),
      jsx("path", {
        d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "3",
      }),
      jsx("path", {
        d: "m18 22-3-3 3-3",
      }),
      jsx("path", {
        d: "m6 2 3 3-3 3",
      }),
    ],
  });
}
