import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-folktale.jpg";
import * as React from "react";

export default function HeroAbout() {
  const ref = React.useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--mx", `${x}px`);
    ref.current.style.setProperty("--my", `${y}px`);
  };

  return (
    <section className="relative" onMouseMove={onMove}>
      <div
        ref={ref}
        className="relative h-[56vh] md:h-[72vh] w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="Hero illustration background"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-background/10" />
        <div
          className="pointer-events-none absolute inset-0 [background:radial-gradient(600px_at_var(--mx)_var(--my),hsl(var(--brand-1)/0.15),transparent_70%)] transition-opacity duration-300"
          aria-hidden="true"
        />
        <div className="container mx-auto h-full flex items-start md:items-center pt-8 md:pt-0">
          <div className="max-w-lg bg-card text-card-foreground rounded-lg shadow-soft p-6 mt-6 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-playfair mb-2">About Me</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
            Hey, I'm Evelyn.
            
            I'm an Illustrator Designer, NFT Creator, and Art Healing Therapist.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 text-xs rounded-md bg-secondary">EN</span>
              <span className="px-2 py-1 text-xs rounded-md bg-secondary">Chinese</span>
            </div>
            <Button variant="hero">View My Work</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
