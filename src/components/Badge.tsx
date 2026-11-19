"use client";

interface BadgeProps {
  status: "live" | "prototype" | "draft";
}

export function Badge({ status }: BadgeProps) {
  const styles = {
    live: "text-accent",
    prototype: "text-royal",
    draft: "text-muted",
  };
  const dot = {
    live: "bg-accent",
    prototype: "bg-royal",
    draft: "bg-muted",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] ${styles[status]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dot[status]}`} />
      {status}
    </span>
  );
}
