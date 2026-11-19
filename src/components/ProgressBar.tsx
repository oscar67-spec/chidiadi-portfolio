export function ProgressBar({ value }: { value: number }) {
  const width = Math.max(0, Math.min(1, value));
  return (
    <div className="mt-12 h-[3px] w-full bg-line-soft">
      <div
        className="h-full bg-accent transition-[width] duration-700"
        style={{ width: `${width * 100}%` }}
      />
    </div>
  );
}
