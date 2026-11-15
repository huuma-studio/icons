import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TrainFrontTunnel({
  children: _,
  size = 24,
  ...props
}: IconProps): JSX.Element {
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
        d: "M2 22V12a10 10 0 1 1 20 0v10",
      }),
      jsx("path", {
        d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",
      }),
      jsx("path", {
        d: "M10 15h.01",
      }),
      jsx("path", {
        d: "M14 15h.01",
      }),
      jsx("path", {
        d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",
      }),
      jsx("path", {
        d: "m9 19-2 3",
      }),
      jsx("path", {
        d: "m15 19 2 3",
      }),
    ],
  });
}
