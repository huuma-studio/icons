import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Goal({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 13V2l8 4-8 4",
      }),
      jsx("path", {
        d: "M20.561 10.222a9 9 0 1 1-12.55-5.29",
      }),
      jsx("path", {
        d: "M8.002 9.997a5 5 0 1 0 8.9 2.02",
      }),
    ],
  });
}
