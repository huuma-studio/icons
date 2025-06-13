import type { Props } from "@huuma/ui";
import { jsx } from "@huuma/ui/jsx-runtime";

export default function ({ children: _, ...props }: Props) {
  return jsx("svg", {
    fill: "none",
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      jsx("path", {
        d: "M18 2h2v20H4V6h2v14h12V4H8V2h10zM8 4H6v2h2V4zm6 2h2v4h-2V6zm-2 0h-2v4h2V6z",
        fill: "currentColor",
      }),
    ],
  });
}
