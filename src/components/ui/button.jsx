import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded font-mono text-[13px] transition-colors active:scale-[0.97] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 motion-reduce:active:scale-100",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-ink border border-line hover:bg-indigo hover:border-indigo hover:text-cream",
        solid: "bg-indigo text-cream border border-indigo hover:bg-indigo-deep hover:border-indigo-deep",
        accent:
          "bg-transparent text-gold border border-gold hover:bg-gold hover:text-cream hover:border-gold",
        ghost: "bg-transparent text-ink-soft border border-transparent hover:text-ink",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 py-1.5 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export default function Button({ className, variant, size, ...props }) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
