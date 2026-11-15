import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Flower({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        r: "3",
      }),
      jsx("path", {
        d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",
      }),
      jsx("path", {
        d: "M12 7.5V9",
      }),
      jsx("path", {
        d: "M7.5 12H9",
      }),
      jsx("path", {
        d: "M16.5 12H15",
      }),
      jsx("path", {
        d: "M12 16.5V15",
      }),
      jsx("path", {
        d: "m8 8 1.88 1.88",
      }),
      jsx("path", {
        d: "M14.12 9.88 16 8",
      }),
      jsx("path", {
        d: "m8 16 1.88-1.88",
      }),
      jsx("path", {
        d: "M14.12 14.12 16 16",
      }),
    ],
  });
}
