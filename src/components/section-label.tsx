export function SectionLabel({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-3.5">
      <span className="font-mono text-xs text-steel">{index}</span>
      <h2 className="font-display text-[22px] font-bold tracking-[-0.02em] text-bone">
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
