export function PlusDivider() {
  return (
    <div className="my-14 flex items-center gap-5 sm:my-16" aria-hidden="true">
      <span className="h-px flex-1 bg-line" />
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-royal">
        <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.1" />
      </svg>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

export function LabelRule({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 border-t border-line pt-5">
      <span className="h-px w-8 bg-ink" />
      <span className="nav-label text-muted">{label}</span>
    </div>
  );
}
