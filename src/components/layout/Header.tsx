import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { label: "Cartoon", href: "/#cartoon" },
  { label: "Creative Process", href: "/#process" },
  { label: "Blog", href: "/#blog" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Exhibitions", href: "/#exhibitions" },
  { label: "Portfolio", href: "/#portfolio" },
];

export default function Header() {
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="font-playfair text-xl">ARTIST</Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          {nav.map((n) => (
            <button
              key={n.label}
              onClick={() => handleNavClick(n.href)}
              className={`text-sm transition-colors ${
                location.pathname === '/' && n.href.startsWith('/#') ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 grid gap-4" aria-label="Mobile">
                {nav.map((n) => (
                  <button
                    key={n.label}
                    onClick={() => handleNavClick(n.href)}
                    className="text-lg text-muted-foreground hover:text-foreground text-left"
                  >
                    {n.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
