import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function TruckElectric({
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
        d: "M14 19V7a2 2 0 0 0-2-2H9",
      }),
      jsx("path", {
        d: "M15 19H9",
      }),
      jsx("path", {
        d: "M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14",
      }),
      jsx("path", {
        d: "M2 13v5a1 1 0 0 0 1 1h2",
      }),
      jsx("path", {
        d: "M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02",
      }),
      jsx("circle", {
        cx: "17",
        cy: "19",
        r: "2",
      }),
      jsx("circle", {
        cx: "7",
        cy: "19",
        r: "2",
      }),
    ],
  });
}
