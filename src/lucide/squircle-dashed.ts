import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SquircleDashed({
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
        d: "M13.77 3.043a34 34 0 0 0-3.54 0",
      }),
      jsx("path", {
        d: "M13.771 20.956a33 33 0 0 1-3.541.001",
      }),
      jsx("path", {
        d: "M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44",
      }),
      jsx("path", {
        d: "M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438",
      }),
      jsx("path", {
        d: "M20.957 10.23a33 33 0 0 1 0 3.54",
      }),
      jsx("path", {
        d: "M3.043 10.23a34 34 0 0 0 .001 3.541",
      }),
      jsx("path", {
        d: "M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438",
      }),
      jsx("path", {
        d: "M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44",
      }),
    ],
  });
}
