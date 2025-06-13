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
        d: "M12 4H2v16h20V6H12V4zm-2 4h10v10H4V6h6v2zm8 6v-2h-6v2h6z",
        fill: "currentColor",
      }),
    ],
  });
}
