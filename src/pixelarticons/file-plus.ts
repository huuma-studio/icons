import type { Props } from "@huuma/ui";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function ({ children: _, ...props }: Props): JSX.Element {
  return jsx("svg", {
    fill: "none",
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      jsx("path", {
        d: "M19 22h-7v-2h7V10h-6V4H5v8H3V2h12v2h2v2h2v2h2v14h-2zM17 6h-2v2h2V6zM8 19h3v-2H8v-3H6v3H3v2h3v3h2v-3z",
        fill: "currentColor",
      }),
    ],
  });
}
