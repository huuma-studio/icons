import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Swords({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      jsx("polyline", {
        points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
      }),
      jsx("line", {
        x1: "13",
        x2: "19",
        y1: "19",
        y2: "13",
      }),
      jsx("line", {
        x1: "16",
        x2: "20",
        y1: "16",
        y2: "20",
      }),
      jsx("line", {
        x1: "19",
        x2: "21",
        y1: "21",
        y2: "19",
      }),
      jsx("polyline", {
        points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5",
      }),
      jsx("line", {
        x1: "5",
        x2: "9",
        y1: "14",
        y2: "18",
      }),
      jsx("line", {
        x1: "7",
        x2: "4",
        y1: "17",
        y2: "20",
      }),
      jsx("line", {
        x1: "3",
        x2: "5",
        y1: "19",
        y2: "21",
      }),
    ],
  });
}
