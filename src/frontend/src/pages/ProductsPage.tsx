import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    id: "fmcg",
    category: "FMCG",
    name: "Food & Beverage Packaging Foils",
    tagline: "High-barrier printing for freshness and shelf appeal",
    image: "/assets/generated/product-fmcg-packaging.dim_600x400.jpg",
    desc: "Our FMCG aluminum foil printing delivers vibrant, fade-resistant graphics that protect product freshness while standing out on retail shelves. Compatible with all standard packaging lines.",
    features: [
      "Up to 12-color gravure printing",
      "High-barrier laminate options",
      "Food-safe inks and adhesives",
      "Custom die-cut and emboss finishes",
      "Min order: 500 kg per SKU",
      "Lead time: 10–14 business days",
    ],
    specs: [
      { label: "Foil Thickness", value: "6–20 micron" },
      { label: "Print Width", value: "Up to 1400mm" },
      { label: "Registration Accuracy", value: "±0.1mm" },
      { label: "Color Gamut", value: "CMYK + 2 spot" },
    ],
  },
  {
    id: "pharma",
    category: "Pharmaceutical",
    name: "Pharmaceutical Blister Foils",
    tagline: "Compliant packaging for dosage and traceability",
    image: "/assets/generated/product-pharma-blisters.dim_600x400.jpg",
    desc: "Precision-printed push-through and cold-form blister foils designed to meet stringent pharmaceutical regulatory requirements. Supports serialization, variable data printing, and anti-counterfeiting features.",
    features: [
      "GMP-compliant production line",
      "Cold-form and thermoforming grades",
      "Serialization & 2D barcode printing",
      "Anti-counterfeiting holographic options",
      "Batch traceability documentation",
      "Compatible with major blister machines",
    ],
    specs: [
      { label: "Foil Grade", value: "Soft / Hard Temper" },
      { label: "Thickness Range", value: "20–60 micron" },
      { label: "Lacquer Options", value: "Heat-seal / Cold-seal" },
      { label: "Certifications", value: "GMP, FDA, EU" },
    ],
  },
  {
    id: "industrial",
    category: "Industrial",
    name: "Industrial & Technical Foils",
    tagline: "Durable foils for insulation and technical applications",
    image: "/assets/generated/product-industrial-foil.dim_600x400.jpg",
    desc: "Heavy-gauge aluminum foils for insulation, shielding, and technical applications. Available in a range of alloys and tempers to meet demanding industrial specifications.",
    features: [
      "Multiple alloy grades available",
      "Plain, embossed, or printed finishes",
      "Laminated with PE, PP, or paper",
      "Custom slitting and rewinding",
      "Large-format rolls available",
      "Technical data sheets provided",
    ],
    specs: [
      { label: "Alloy Series", value: "1xxx / 3xxx / 8xxx" },
      { label: "Thickness Range", value: "50–200 micron" },
      { label: "Temper", value: "O / H14 / H18" },
      { label: "Max Roll Width", value: "1600mm" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="bg-card border-b border-border py-16 md:py-20"
        data-ocid="products-hero"
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
              Aluminum Foil Solutions for Every Industry
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              From vibrant FMCG packaging to pharmaceutical-grade blister foils
              and industrial applications — our product range is engineered for
              precision, compliance, and performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-background" data-ocid="products-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-ocid={`product-${product.id}`}
            >
              <Card className="border-border shadow-card overflow-hidden">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  <div
                    className={`overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 lg:h-full object-cover"
                      style={{ minHeight: "300px" }}
                    />
                  </div>
                  <CardContent className="p-8 lg:p-10 flex flex-col justify-center gap-5">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary/10 text-primary border-primary/20 font-body text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-2xl text-foreground tracking-tight mb-2">
                        {product.name}
                      </h2>
                      <p className="text-primary font-medium text-sm mb-3">
                        {product.tagline}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {product.desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-muted/40 rounded-lg p-4 grid grid-cols-2 gap-3">
                      {product.specs.map((spec) => (
                        <div key={spec.label}>
                          <div className="text-muted-foreground text-xs uppercase tracking-wide mb-0.5">
                            {spec.label}
                          </div>
                          <div className="text-foreground text-sm font-medium">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button
                        className="self-start font-display font-semibold gap-2"
                        data-ocid={`product-cta-${product.id}`}
                      >
                        Request Samples <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-16 bg-muted/30">
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
              Our engineering team works directly with clients to develop custom
              foil specifications, laminate structures, and print formulations
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
