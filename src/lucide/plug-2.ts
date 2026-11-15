import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Plug2({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M9 2v6",
      }),
      jsx("path", {
        d: "M15 2v6",
      }),
      jsx("path", {
        d: "M12 17v5",
      }),
      jsx("path", {
        d: "M5 8h14",
      }),
      jsx("path", {
        d: "M6 11V8h12v3a6 6 0 1 1-12 0Z",
      }),
    ],
  });
}
