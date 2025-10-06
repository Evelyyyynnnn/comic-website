import { PropsWithChildren } from "react";

interface SectionTitleProps {
  text: string;
}

export function SectionTitle({ text }: PropsWithChildren<SectionTitleProps>) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-playfair inline-flex items-center gap-3">
        {text}
      </h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[hsl(var(--brand-1))]" aria-hidden="true" />
    </div>
  );
}
