import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Clients", path: "/clients" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group transition-smooth"
            >
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-card">
                <span className="text-primary-foreground font-display font-bold text-sm leading-none">
                  SS
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-foreground text-base leading-tight tracking-tight">
                  SS ENTERPRISES
                </span>
                <span className="text-muted-foreground text-[10px] leading-tight tracking-widest uppercase">
                  Aluminum Foil Specialists
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-1"
              data-ocid="desktop-nav"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-body font-medium transition-smooth rounded-md ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden md:block">
                <Button
                  size="sm"
                  className="font-display font-semibold tracking-wide"
                  data-ocid="header-cta"
                >
                  Request Quote
                </Button>
              </Link>
              <button
                type="button"
                className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-smooth"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                data-ocid="mobile-menu-trigger"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
        currentPath={currentPath}
      />
    </>
  );
}
