import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function MonitorSpeaker({
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
        d: "M5.5 20H8",
      }),
      jsx("path", {
        d: "M17 9h.01",
      }),
      jsx("rect", {
        width: "10",
        height: "16",
        x: "12",
        y: "4",
        rx: "2",
      }),
      jsx("path", {
        d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",
      }),
      jsx("circle", {
        cx: "17",
        cy: "15",
        r: "1",
      }),
    ],
  });
}
