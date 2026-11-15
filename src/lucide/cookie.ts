import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Cookie({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
      }),
      jsx("path", {
        d: "M8.5 8.5v.01",
      }),
      jsx("path", {
        d: "M16 15.5v.01",
      }),
      jsx("path", {
        d: "M12 12v.01",
      }),
      jsx("path", {
        d: "M11 17v.01",
      }),
      jsx("path", {
        d: "M7 14v.01",
      }),
    ],
  });
}
