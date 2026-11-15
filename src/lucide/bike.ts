import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Bike({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        cx: "18.5",
        cy: "17.5",
        r: "3.5",
      }),
      jsx("circle", {
        cx: "5.5",
        cy: "17.5",
        r: "3.5",
      }),
      jsx("circle", {
        cx: "15",
        cy: "5",
        r: "1",
      }),
      jsx("path", {
        d: "M12 17.5V14l-3-3 4-3 2 3h2",
      }),
    ],
  });
}
