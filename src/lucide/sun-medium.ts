import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function SunMedium({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        cy: "12",
        r: "4",
      }),
      jsx("path", {
        d: "M12 3v1",
      }),
      jsx("path", {
        d: "M12 20v1",
      }),
      jsx("path", {
        d: "M3 12h1",
      }),
      jsx("path", {
        d: "M20 12h1",
      }),
      jsx("path", {
        d: "m18.364 5.636-.707.707",
      }),
      jsx("path", {
        d: "m6.343 17.657-.707.707",
      }),
      jsx("path", {
        d: "m5.636 5.636.707.707",
      }),
      jsx("path", {
        d: "m17.657 17.657.707.707",
      }),
    ],
  });
}
