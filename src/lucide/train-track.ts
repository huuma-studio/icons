import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TrainTrack({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M2 17 17 2",
      }),
      jsx("path", {
        d: "m2 14 8 8",
      }),
      jsx("path", {
        d: "m5 11 8 8",
      }),
      jsx("path", {
        d: "m8 8 8 8",
      }),
      jsx("path", {
        d: "m11 5 8 8",
      }),
      jsx("path", {
        d: "m14 2 8 8",
      }),
      jsx("path", {
        d: "M7 22 22 7",
      }),
    ],
  });
}
