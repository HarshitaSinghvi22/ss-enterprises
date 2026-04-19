import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "PHITA", path: "/phita" },
  { label: "Clients", path: "/clients" },
  { label: "Contact", path: "/contact" },
];

const contactInfo = [
  { icon: Phone, text: "+91 98765 43210" },
  { icon: Mail, text: "info@ssenterprises.in" },
  { icon: MapPin, text: "Mumbai, Maharashtra, India" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">
                  SS
                </span>
              </div>
              <div>
                <div className="font-display font-bold text-foreground text-sm tracking-tight">
                  SS ENTERPRISES
                </div>
                <div className="text-muted-foreground text-[10px] tracking-widest uppercase">
                  Aluminum Foil Specialists
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Precision aluminum foil printing for FMCG and pharmaceutical
              industries. Quality, compliance, and reliability since 2001.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-smooth"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs">
            © {year} SS Enterprises. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
