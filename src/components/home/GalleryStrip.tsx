import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryStripProps {
  items: { src: string; alt: string }[];
}

export default function GalleryStrip({ items }: GalleryStripProps) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<{ src: string; alt: string } | null>(null);

  const onOpen = (item: { src: string; alt: string }) => {
    setActive(item);
    setOpen(true);
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4 max-md:flex max-md:gap-3 max-md:overflow-x-auto max-md:snap-x">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => onOpen(it)}
              className="relative aspect-square overflow-hidden rounded-lg shadow-soft hover:scale-[1.02] transition-transform flex-shrink-0 max-md:w-64"
              aria-label={`Open ${it.alt}`}
            >
              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          {active && (
            <img src={active.src} alt={active.alt} className="w-full h-auto rounded-md" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
