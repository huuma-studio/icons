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
        d: "M21 6H7v16h8v-2h2v-2h-2v-2h2v2h2v-2h2V6zM9 20V8h10v6h-6v6H9zm-6-2h2V4h12V2H3v16z",
        fill: "currentColor",
      }),
    ],
  });
}
