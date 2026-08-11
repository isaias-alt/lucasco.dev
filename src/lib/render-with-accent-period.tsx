export function renderWithAccentPeriod(text: string) {
  if (!text.endsWith(".")) return text;
  return (
    <>
      {text.slice(0, -1)}
      <span className="text-steel">.</span>
    </>
  );
}
