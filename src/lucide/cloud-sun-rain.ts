import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CloudSunRain({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 2v2",
      }),
      jsx("path", {
        d: "m4.93 4.93 1.41 1.41",
      }),
      jsx("path", {
        d: "M20 12h2",
      }),
      jsx("path", {
        d: "m19.07 4.93-1.41 1.41",
      }),
      jsx("path", {
        d: "M15.947 12.65a4 4 0 0 0-5.925-4.128",
      }),
      jsx("path", {
        d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",
      }),
      jsx("path", {
        d: "M11 20v2",
      }),
      jsx("path", {
        d: "M7 19v2",
      }),
    ],
  });
}
