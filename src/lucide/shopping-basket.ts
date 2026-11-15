import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ShoppingBasket({
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
        d: "m15 11-1 9",
      }),
      jsx("path", {
        d: "m19 11-4-7",
      }),
      jsx("path", {
        d: "M2 11h20",
      }),
      jsx("path", {
        d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",
      }),
      jsx("path", {
        d: "M4.5 15.5h15",
      }),
      jsx("path", {
        d: "m5 11 4-7",
      }),
      jsx("path", {
        d: "m9 11 1 9",
      }),
    ],
  });
}
