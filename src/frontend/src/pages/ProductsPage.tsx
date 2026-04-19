import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Info, Package, PackageOpen } from "lucide-react";
import { motion } from "motion/react";

const primaryProducts = [
  { name: "Blister Foil", detail: "20 · 25 · 30 · 40 micron" },
  { name: "Strip Foil", detail: "25 · 30 · 40 micron" },
  { name: "3/4/5 Ply Laminates", detail: "Multi-layer barrier structures" },
  {
    name: "CR Foil (Child Resistant)",
    detail: "Safety-compliant push-through",
  },
  { name: "Glassine Poly for Strip Pack", detail: "Clear-release liner" },
  { name: "Induction Sealing Wads", detail: "Tamper-evident closures" },
  { name: "Pouches", detail: "Heat-sealable flexible pouches" },
  { name: "Taggers", detail: "Custom printed tag inserts" },
  {
    name: "Metalised Polyester Laminates",
    detail: "High-barrier barrier film",
  },
  { name: "Cigarette Foil", detail: "Inner liner & wrap foils" },
  { name: "Chocolate Foil", detail: "Food-grade decorative foil" },
  { name: "Polyester Laminates", detail: "PET-based flexible laminates" },
  {
    name: "Glassine VMCH for Blister Pack",
    detail: "Vacuum-metallised coating",
  },
  { name: "CFB (Alu Alu Foil)", detail: "Cold-form blister base film" },
  { name: "PVC for Blister Pack", detail: "Thermoforming blister grade" },
  {
    name: "PHITA Banding Roll",
    detail: "Tamper-evident banding solution",
    isPhita: true,
  },
];

const secondaryProducts = [
  { name: "Mono Cartons", detail: "Custom-printed unit cartons" },
  { name: "Skillets", detail: "Display-ready shelf strips" },
  { name: "Met Pet Cartons", detail: "Metallised finish cartons" },
  { name: "Outer and Inner Cartons", detail: "Corrugated shipping cartons" },
  { name: "Cluster Pack", detail: "Multi-unit bundled packaging" },
  { name: "Window Cartons", detail: "Clear-window display cartons" },
  { name: "Catch Covers", detail: "Promotional overlay covers" },
  { name: "E & N Flute Boxes", detail: "Lightweight corrugated boxes" },
  { name: "3D Printed Cartons", detail: "Embossed 3D surface cartons" },
  {
    name: "Scent Printed Cartons",
    detail: "Scratch-and-sniff fragrance print",
  },
  { name: "Corporate Stationery", detail: "Letterheads, envelopes, cards" },
  {
    name: "Flyers, Posters and Marketing Material",
    detail: "Campaign print collateral",
  },
  { name: "Table & Wall Calendar", detail: "Annual branded calendars" },
  {
    name: "Product Manuals & Brochures",
    detail: "Technical literature printing",
  },
  {
    name: "Adhesive and Non-Adhesive Labels",
    detail: "Self-adhesive & plain labels",
  },
  {
    name: "Literature / Leaflets, Inserts & Outserts",
    detail: "In-pack information sheets",
  },
];

interface ProductItem {
  name: string;
  detail: string;
  isPhita?: boolean;
}

function ProductCard({ item, index }: { item: ProductItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      data-ocid={`product-item.${index + 1}`}
    >
      <Card
        className={`border-border shadow-card h-full transition-smooth hover:shadow-elevated ${
          item.isPhita ? "border-accent/50 bg-accent/5" : ""
        }`}
      >
        <CardContent className="p-5 flex flex-col gap-2 h-full">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-semibold text-sm text-foreground leading-snug">
              {item.name}
            </h3>
            {item.isPhita && (
              <Badge className="bg-accent/15 text-accent border-accent/30 text-[10px] shrink-0 font-body">
                Featured
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground text-xs font-body leading-relaxed flex-1">
            {item.detail}
          </p>
          {item.isPhita && (
            <Link to="/phita">
              <Button
                size="sm"
                variant="outline"
                className="mt-1 w-full border-accent/40 text-accent hover:bg-accent/10 font-display text-xs gap-1.5"
                data-ocid="phita-learn-more-button"
              >
                <Info className="w-3 h-3" />
                Learn More
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="bg-card border-b border-border py-16 md:py-20"
        data-ocid="products.page"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge
              variant="outline"
              className="border-primary/40 text-primary text-xs uppercase tracking-widest px-3 py-1 mb-5"
            >
              Product Range
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-5">
              Comprehensive Packaging Solutions
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              SS Enterprises offers an extensive range of primary and secondary
              packaging materials — engineered for pharmaceutical, FMCG, and
              consumer goods industries. From blister foils to cartons, every
              product meets the highest quality and regulatory standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Primary Packaging */}
      <section
        className="py-16 bg-background"
        data-ocid="primary-packaging.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <Badge
                variant="outline"
                className="border-primary/40 text-primary text-xs uppercase tracking-widest px-3 py-1"
              >
                Primary Packaging
              </Badge>
            </div>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight mb-3">
              Primary Packaging
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl leading-relaxed">
              Direct-contact packaging materials manufactured to pharmaceutical
              and food-grade specifications. All foils and laminates comply with
              industry regulatory requirements.
            </p>
          </motion.div>

          {/* PHITA Callout Banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
            data-ocid="phita.callout"
          >
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Info className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                    PHITA Banding Roll — Tamper-Evident Packaging
                  </h3>
                  <p className="text-muted-foreground text-xs font-body leading-relaxed">
                    Our PHITA Banding Roll offers a high-performance,
                    tamper-evident banding solution for pharmaceutical and
                    consumer products. Engineered for precision banding lines
                    with consistent seal integrity.
                  </p>
                </div>
              </div>
              <Link to="/phita" className="shrink-0">
                <Button
                  className="font-display font-semibold gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
                  data-ocid="phita-callout-cta"
                >
                  Explore PHITA <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            data-ocid="primary-products.list"
          >
            {primaryProducts.map((item, i) => (
              <ProductCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Packaging */}
      <section
        className="py-16 bg-muted/30"
        data-ocid="secondary-packaging.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <PackageOpen className="w-5 h-5 text-primary" />
              </div>
              <Badge
                variant="outline"
                className="border-primary/40 text-primary text-xs uppercase tracking-widest px-3 py-1"
              >
                Secondary Packaging
              </Badge>
            </div>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight mb-3">
              Secondary Packaging
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl leading-relaxed">
              Value-added secondary packaging and print solutions that complete
              the product presentation — from retail cartons and labels to
              marketing collateral and branded stationery.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            data-ocid="secondary-products.list"
          >
            {secondaryProducts.map((item, i) => (
              <ProductCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl text-foreground mb-4 tracking-tight">
              Need a Custom Specification?
            </h2>
            <p className="text-muted-foreground mb-8 font-body leading-relaxed">
              Our technical team works directly with clients to develop custom
              foil specifications, laminate structures, and packaging solutions
              tailored to your exact requirements.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="font-display font-semibold gap-2"
                data-ocid="products-custom-cta"
              >
                Discuss Your Requirements <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
