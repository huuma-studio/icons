import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ServerCog({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "m10.852 14.772-.383.923",
      }),
      jsx("path", {
        d: "M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923",
      }),
      jsx("path", {
        d: "m13.148 9.228.383-.923",
      }),
      jsx("path", {
        d: "m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544",
      }),
      jsx("path", {
        d: "m14.772 10.852.923-.383",
      }),
      jsx("path", {
        d: "m14.772 13.148.923.383",
      }),
      jsx("path", {
        d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",
      }),
      jsx("path", {
        d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",
      }),
      jsx("path", {
        d: "M6 18h.01",
      }),
      jsx("path", {
        d: "M6 6h.01",
      }),
      jsx("path", {
        d: "m9.228 10.852-.923-.383",
      }),
      jsx("path", {
        d: "m9.228 13.148-.923.383",
      }),
    ],
  });
}
