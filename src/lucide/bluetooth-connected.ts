import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function BluetoothConnected({
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
        d: "m7 7 10 10-5 5V2l5 5L7 17",
      }),
      jsx("line", {
        x1: "18",
        x2: "21",
        y1: "12",
        y2: "12",
      }),
      jsx("line", {
        x1: "3",
        x2: "6",
        y1: "12",
        y2: "12",
      }),
    ],
  });
}
