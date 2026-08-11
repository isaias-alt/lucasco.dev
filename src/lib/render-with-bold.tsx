export function renderWithBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <b key={i} className="font-medium text-bone">
        {part.slice(2, -2)}
      </b>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
