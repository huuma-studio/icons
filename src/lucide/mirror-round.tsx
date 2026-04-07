import type { JSX } from "@huuma/ui/jsx-runtime";
import type { IconProps } from "./icons.ts";

export default function MirrorRound({
  size = 24,
  class: className,
}: IconProps): JSX.Element {
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
      class={className}
    >
      <path d="M10 6.6 8.6 8" />
      <path d="M12 18v4" />
      <path d="M15 7.5 9.5 13" />
      <path d="M7 22h10" />
      <circle cx="12" cy="10" r="8" />
    </svg>
  );
}
