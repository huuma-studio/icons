import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Siren({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M7 18v-6a5 5 0 1 1 10 0v6",
      }),
      jsx("path", {
        d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",
      }),
      jsx("path", {
        d: "M21 12h1",
      }),
      jsx("path", {
        d: "M18.5 4.5 18 5",
      }),
      jsx("path", {
        d: "M2 12h1",
      }),
      jsx("path", {
        d: "M12 2v1",
      }),
      jsx("path", {
        d: "m4.929 4.929.707.707",
      }),
      jsx("path", {
        d: "M12 12v6",
      }),
    ],
  });
}
