type SectionDescriptionProps = {
  className: string;
  text: string | readonly string[];
};

export function SectionDescription({ className, text }: SectionDescriptionProps) {
  if (Array.isArray(text)) {
    return (
      <p aria-label={text.join(" ")} className={className}>
        {text.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    );
  }

  return <p className={className}>{text}</p>;
}
