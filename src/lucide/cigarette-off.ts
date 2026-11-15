import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function CigaretteOff({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13",
      }),
      jsx("path", {
        d: "M18 8c0-2.5-2-2.5-2-5",
      }),
      jsx("path", {
        d: "m2 2 20 20",
      }),
      jsx("path", {
        d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866",
      }),
      jsx("path", {
        d: "M22 8c0-2.5-2-2.5-2-5",
      }),
      jsx("path", {
        d: "M7 12v4",
      }),
    ],
  });
}
