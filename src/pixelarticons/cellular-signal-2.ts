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
        d: "M16 4v16h6V4h-6Zm4 2v12h-2V6h2ZM2 14h6v6H2v-6Zm13-4H9v10h6V10Z",
      }),
    ],
  });
}
