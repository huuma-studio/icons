import type { JSX } from "@huuma/ui/jsx-runtime";
import type { IconProps } from "./icons.ts";

export default function Turntable({ children: _, size = 24, ...props }: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M10 12.01h.01" />
      <path d="M18 8v4a8 8 0 0 1-1.07 4" />
      <circle cx="10" cy="12" r="4" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}
