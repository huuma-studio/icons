import type { IconProps } from "./icons.ts";
import { type JSX, jsx } from "@huuma/ui/jsx-runtime";

export default function FolderSync({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
        d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",
      }),
      jsx("path", {
        d: "M12 10v4h4",
      }),
      jsx("path", {
        d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5",
      }),
      jsx("path", {
        d: "M22 22v-4h-4",
      }),
      jsx("path", {
        d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5",
      }),
    ],
  });
}
