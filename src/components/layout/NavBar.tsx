import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <nav className="container flex h-14 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" aria-hidden />
          <span className="font-semibold">Indrakant Mishra</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="story-link text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          {/* <Button
            variant="hero"
            size="sm"
            className="hover-scale"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Hire Me
          </Button> */}
        </div>

        <Button
          variant="glass"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-background animate-fade-in">
          <div className="container py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="hero"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
            >
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
