import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ClockArrowDown({
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
        d: "M12 6v6l2 1",
      }),
      jsx("path", {
        d: "M12.337 21.994a10 10 0 1 1 9.588-8.767",
      }),
      jsx("path", {
        d: "m14 18 4 4 4-4",
      }),
      jsx("path", {
        d: "M18 14v8",
      }),
    ],
  });
}
