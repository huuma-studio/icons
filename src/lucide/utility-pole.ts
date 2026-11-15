import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function UtilityPole({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 2v20",
      }),
      jsx("path", {
        d: "M2 5h20",
      }),
      jsx("path", {
        d: "M3 3v2",
      }),
      jsx("path", {
        d: "M7 3v2",
      }),
      jsx("path", {
        d: "M17 3v2",
      }),
      jsx("path", {
        d: "M21 3v2",
      }),
      jsx("path", {
        d: "m19 5-7 7-7-7",
      }),
    ],
  });
}
