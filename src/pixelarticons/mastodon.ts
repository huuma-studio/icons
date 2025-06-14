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
        fill: "currentColor",
        d: "M7 2v2h10V2H7Zm10 2v2h2V4h-2Zm2 2v8h2V6h-2Zm0 8h-8v2h8v-2Zm-8 2H9v2h2v-2Zm0 2v2h2v-2h-2Zm0 2H7v2h4v-2Zm-4 0v-2H5v2h2Zm-2-2V6H3v12h2ZM5 6h2V4H5v2Zm4 0v2h2V6H9Zm2 2v2h2V8h-2Zm2 0h2V6h-2v2Zm2 0v4h2V8h-2ZM9 8H7v4h2V8Z",
      }),
    ],
  });
}
