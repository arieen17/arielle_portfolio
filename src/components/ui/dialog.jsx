import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Dialog = BaseDialog.Root;
export const DialogTrigger = BaseDialog.Trigger;

export function DialogContent({ className, children, ...props }) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="dialog-backdrop fixed inset-0 z-50 bg-ink/40" />
      <BaseDialog.Popup
        className={cn(
          "dialog-popup fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 border border-line bg-cream",
          className
        )}
        {...props}
      >
        <BaseDialog.Close
          aria-label="Close"
          className="absolute right-4 top-4 text-ink-faint transition-colors hover:text-ink"
        >
          <X size={18} strokeWidth={1.5} />
        </BaseDialog.Close>
        {children}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  );
}

export function DialogHeader({ className, ...props }) {
  return (
    <div
      className={cn("border-b border-line px-6 py-5 pr-12", className)}
      {...props}
    />
  );
}

export function DialogTitle({ className, ...props }) {
  return (
    <BaseDialog.Title
      className={cn("font-serif text-[22px] leading-snug text-ink", className)}
      {...props}
    />
  );
}

export function DialogDescription({ className, ...props }) {
  return (
    <BaseDialog.Description
      className={cn("mt-1.5 text-[13px] leading-relaxed text-ink-soft", className)}
      {...props}
    />
  );
}

export function DialogBody({ className, ...props }) {
  return <div className={cn("px-6 py-5", className)} {...props} />;
}

export function DialogFooter({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-3 border-t border-line px-6 py-4",
        className
      )}
      {...props}
    />
  );
}

export const DialogClose = BaseDialog.Close;
