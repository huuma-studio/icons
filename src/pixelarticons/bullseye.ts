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
        d: "M18 2H6v2H4v2H2v12h2v2h2v2h12v-2h2v-2h2V6h-2V4h-2V2zm0 2v2h2v12h-2v2H6v-2H4V6h2V4h12zm-8 6h4v4h-4v-4zM8 6h8v2H8V6zm0 10H6V8h2v8zm8 0v2H8v-2h8zm0 0h2V8h-2v8z",
        fill: "currentColor",
      }),
    ],
  });
}
