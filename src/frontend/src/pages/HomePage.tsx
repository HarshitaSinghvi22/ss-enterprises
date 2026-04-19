import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, ChevronRight, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";

const capabilities = [
  {
    title: "Food & Beverage Packaging",
    desc: "High-barrier foil printing for freshness, shelf appeal, and safety.",
    image: "/assets/generated/product-fmcg-packaging.dim_600x400.jpg",
    link: "/products",
  },
  {
    title: "Pharmaceutical Blisters",
    desc: "Secure, compliant printing for dosage tracking and regulatory adherence.",
    image: "/assets/generated/product-pharma-blisters.dim_600x400.jpg",
    link: "/products",
  },
  {
    title: "Industrial Foil Solutions",
    desc: "Durable insulation and technical foil solutions for industrial applications.",
    image: "/assets/generated/product-industrial-foil.dim_600x400.jpg",
    link: "/products",
  },
];

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "500+", label: "Global Clients" },
  { value: "15", label: "Countries Served" },
  { value: "99.8%", label: "Quality Pass Rate" },
];

const whyUs = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    desc: "All products meet FDA, EU, and BIS standards for food and pharmaceutical packaging.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Streamlined production with 7–14 day lead times for standard orders.",
  },
  {
    icon: Award,
    title: "ISO Certified Quality",
    desc: "ISO 9001:2015 certified manufacturing processes ensuring consistent excellence.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-card"
        data-ocid="hero-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[520px] py-16 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <Badge
                variant="outline"
                className="self-start border-primary/40 text-primary font-body font-medium text-xs uppercase tracking-widest px-3 py-1"
              >
                Precision Foil Printing
              </Badge>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-5xl text-foreground leading-tight tracking-tight">
                Advanced Aluminum Foil
                <br />
                <span className="text-primary">Printing Solutions</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg font-body">
                High-quality, customizable printing for packaging excellence
                across FMCG and pharmaceutical industries.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/products">
                  <Button
                    size="lg"
                    className="font-display font-semibold tracking-wide gap-2"
                    data-ocid="hero-explore-btn"
                  >
                    Explore Products
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-display font-semibold tracking-wide border-primary/40 text-primary hover:bg-primary/5"
                    data-ocid="hero-quote-btn"
                  >
                    Get a Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden shadow-elevated lg:my-10"
            >
              <img
                src="/assets/generated/hero-manufacturing.dim_1200x600.jpg"
                alt="Industrial aluminum foil printing facility"
                className="w-full h-72 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="font-display font-bold text-3xl text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm font-body mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Capabilities */}
      <section className="py-20 bg-background" data-ocid="capabilities-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight">
              Our Printing Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card
                  className="overflow-hidden shadow-card border-border hover:shadow-elevated transition-smooth group"
                  data-ocid={`capability-card-${i}`}
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-display font-semibold text-foreground text-base mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {cap.desc}
                    </p>
                    <Link
                      to={cap.link}
                      className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-smooth"
                      data-ocid={`capability-link-${i}`}
                    >
                      View Solutions <ChevronRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30" data-ocid="why-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">
              Our Commitment
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight">
              Why Choose SS Enterprises
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <Card className="bg-card border-border shadow-card p-6 h-full hover:shadow-elevated transition-smooth">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary" data-ocid="cta-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-bold text-3xl text-primary-foreground mb-4 tracking-tight">
              Ready to Elevate Your Packaging?
            </h2>
            <p className="text-primary-foreground/80 text-base mb-8 font-body">
              Talk to our specialists and discover how SS Enterprises can
              transform your packaging with precision aluminum foil printing.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="font-display font-semibold tracking-wide gap-2"
                data-ocid="cta-contact-btn"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
