import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ClockFading({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M12 2a10 10 0 0 1 7.38 16.75",
      }),
      jsx("path", {
        d: "M12 6v6l4 2",
      }),
      jsx("path", {
        d: "M2.5 8.875a10 10 0 0 0-.5 3",
      }),
      jsx("path", {
        d: "M2.83 16a10 10 0 0 0 2.43 3.4",
      }),
      jsx("path", {
        d: "M4.636 5.235a10 10 0 0 1 .891-.857",
      }),
      jsx("path", {
        d: "M8.644 21.42a10 10 0 0 0 7.631-.38",
      }),
    ],
  });
}
