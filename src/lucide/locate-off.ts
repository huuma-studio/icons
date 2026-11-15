import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function LocateOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 19v3",
      }),
      jsx("path", {
        d: "M12 2v3",
      }),
      jsx("path", {
        d: "M18.89 13.24a7 7 0 0 0-8.13-8.13",
      }),
      jsx("path", {
        d: "M19 12h3",
      }),
      jsx("path", {
        d: "M2 12h3",
      }),
      jsx("path", {
        d: "m2 2 20 20",
      }),
      jsx("path", {
        d: "M7.05 7.05a7 7 0 0 0 9.9 9.9",
      }),
    ],
  });
}
