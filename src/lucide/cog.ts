import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Cog({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M11 10.27 7 3.34",
      }),
      jsx("path", {
        d: "m11 13.73-4 6.93",
      }),
      jsx("path", {
        d: "M12 22v-2",
      }),
      jsx("path", {
        d: "M12 2v2",
      }),
      jsx("path", {
        d: "M14 12h8",
      }),
      jsx("path", {
        d: "m17 20.66-1-1.73",
      }),
      jsx("path", {
        d: "m17 3.34-1 1.73",
      }),
      jsx("path", {
        d: "M2 12h2",
      }),
      jsx("path", {
        d: "m20.66 17-1.73-1",
      }),
      jsx("path", {
        d: "m20.66 7-1.73 1",
      }),
      jsx("path", {
        d: "m3.34 17 1.73-1",
      }),
      jsx("path", {
        d: "m3.34 7 1.73 1",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "2",
      }),
      jsx("circle", {
        cx: "12",
        cy: "12",
        r: "8",
      }),
    ],
  });
}
