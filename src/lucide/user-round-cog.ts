import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function UserRoundCog({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m14.305 19.53.923-.382",
      }),
      jsx("path", {
        d: "m15.228 16.852-.923-.383",
      }),
      jsx("path", {
        d: "m16.852 15.228-.383-.923",
      }),
      jsx("path", {
        d: "m16.852 20.772-.383.924",
      }),
      jsx("path", {
        d: "m19.148 15.228.383-.923",
      }),
      jsx("path", {
        d: "m19.53 21.696-.382-.924",
      }),
      jsx("path", {
        d: "M2 21a8 8 0 0 1 10.434-7.62",
      }),
      jsx("path", {
        d: "m20.772 16.852.924-.383",
      }),
      jsx("path", {
        d: "m20.772 19.148.924.383",
      }),
      jsx("circle", {
        cx: "10",
        cy: "8",
        r: "5",
      }),
      jsx("circle", {
        cx: "18",
        cy: "18",
        r: "3",
      }),
    ],
  });
}
