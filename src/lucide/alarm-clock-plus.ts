import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function AlarmClockPlus({
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
      jsx("circle", {
        cx: "12",
        cy: "13",
        r: "8",
      }),
      jsx("path", {
        d: "M5 3 2 6",
      }),
      jsx("path", {
        d: "m22 6-3-3",
      }),
      jsx("path", {
        d: "M6.38 18.7 4 21",
      }),
      jsx("path", {
        d: "M17.64 18.67 20 21",
      }),
      jsx("path", {
        d: "M12 10v6",
      }),
      jsx("path", {
        d: "M9 13h6",
      }),
    ],
  });
}
