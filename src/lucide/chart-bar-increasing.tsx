import type { JSX } from "@huuma/ui/jsx-runtime";
import type { IconProps } from "./icons.ts";

export default function ChartBarIncreasing({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 11h8" />
      <path d="M7 16h12" />
      <path d="M7 6h3" />
    </svg>
  );
}
