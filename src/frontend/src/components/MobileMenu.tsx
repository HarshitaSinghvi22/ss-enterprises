import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect } from "react";

interface NavItem {
  label: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  currentPath: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  navItems,
  currentPath,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden" data-ocid="mobile-menu">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
        role="button"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="absolute top-0 right-0 bottom-0 w-72 bg-card shadow-elevated flex flex-col">
        <div className="flex items-center justify-between px-5 h-16 border-b border-border">
          <span className="font-display font-bold text-foreground text-sm tracking-tight">
            Navigation
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth"
            aria-label="Close menu"
            data-ocid="mobile-menu-close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav
          className="flex-1 px-4 py-6 flex flex-col gap-1"
          data-ocid="mobile-nav"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                isActive(item.path)
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-4 py-6 border-t border-border">
          <Link to="/contact" onClick={onClose}>
            <Button
              className="w-full font-display font-semibold"
              data-ocid="mobile-cta"
            >
              Request Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
