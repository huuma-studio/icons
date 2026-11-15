import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function HatGlasses({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M14 18a2 2 0 0 0-4 0",
      }),
      jsx("path", {
        d: "m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11",
      }),
      jsx("path", {
        d: "M2 11h20",
      }),
      jsx("circle", {
        cx: "17",
        cy: "18",
        r: "3",
      }),
      jsx("circle", {
        cx: "7",
        cy: "18",
        r: "3",
      }),
    ],
  });
}
