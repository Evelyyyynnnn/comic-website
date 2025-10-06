import { Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {year} Evelyn</p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a 
            href="https://www.instagram.com/evelynnnnn.du/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram" 
            className="hover:text-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
