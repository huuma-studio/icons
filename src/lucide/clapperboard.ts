import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Clapperboard({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m12.296 3.464 3.02 3.956",
      }),
      jsx("path", {
        d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",
      }),
      jsx("path", {
        d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      }),
      jsx("path", {
        d: "m6.18 5.276 3.1 3.899",
      }),
    ],
  });
}
