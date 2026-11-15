import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TextWrap({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m16 16-3 3 3 3",
      }),
      jsx("path", {
        d: "M3 12h14.5a1 1 0 0 1 0 7H13",
      }),
      jsx("path", {
        d: "M3 19h6",
      }),
      jsx("path", {
        d: "M3 5h18",
      }),
    ],
  });
}
