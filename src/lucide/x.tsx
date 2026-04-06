import { IconProps } from "./icons.ts";

export default function X({ size = 24, class: className }: IconProps) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
