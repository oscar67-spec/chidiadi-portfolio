interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`max-w-4xl font-serif text-[clamp(1.95rem,4.4vw,3.15rem)] font-medium leading-[1.1] tracking-[-0.01em] text-royal ${className}`}
    >
      {children}
    </h2>
  );
}
