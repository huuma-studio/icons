import type { JSX } from "@huuma/ui/jsx-runtime";
import type { IconProps } from "./icons.ts";

export default function JapaneseYen({ children: _, size = 24, ...props }: IconProps): JSX.Element {
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
      <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
      <path d="M6 15h12" />
      <path d="M6 11h12" />
    </svg>
  );
}
