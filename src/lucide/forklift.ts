import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function Forklift({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 12H5a2 2 0 0 0-2 2v5",
      }),
      jsx("path", {
        d: "M15 19h7",
      }),
      jsx("path", {
        d: "M16 19V2",
      }),
      jsx("path", {
        d: "M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828",
      }),
      jsx("path", {
        d: "M7 19h4",
      }),
      jsx("circle", {
        cx: "13",
        cy: "19",
        r: "2",
      }),
      jsx("circle", {
        cx: "5",
        cy: "19",
        r: "2",
      }),
    ],
  });
}
