import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const milestones = [
  {
    year: "2001",
    title: "Founded in Mumbai",
    desc: "SS Enterprises begins operations with a single printing line for local FMCG brands.",
  },
  {
    year: "2008",
    title: "Pharmaceutical Expansion",
    desc: "Achieved GMP certification and expanded into pharmaceutical blister packaging.",
  },
  {
    year: "2013",
    title: "ISO 9001 Certification",
    desc: "Received ISO 9001:2008 certification, reinforcing our commitment to quality management.",
  },
  {
    year: "2018",
    title: "International Reach",
    desc: "Began exporting to Southeast Asia, Middle East, and African markets.",
  },
  {
    year: "2024",
    title: "State-of-the-Art Expansion",
    desc: "Commissioned new 12-color gravure printing line and expanded capacity by 40%.",
  },
];

const values = [
  {
    title: "Precision",
    desc: "Every micron matters. Our processes are calibrated for tight tolerances and repeatable quality.",
  },
  {
    title: "Integrity",
    desc: "Transparent pricing, honest timelines, and accountability at every stage of production.",
  },
  {
    title: "Innovation",
    desc: "Continuous investment in R&D and modern machinery to stay ahead of industry demands.",
  },
  {
    title: "Partnership",
    desc: "We view every client relationship as a long-term partnership, not a transaction.",
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "GMP Certified for Pharmaceutical Packaging",
  "BIS Marked Products",
  "FDA Compliant Materials",
  "REACH Regulation Compliance",
  "Food-Safe Ink Certification",
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="bg-card border-b border-border py-16 md:py-20"
        data-ocid="about-hero"
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
              Our Story
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-5">
              Decades of Printing Excellence
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              SS Enterprises has been a trusted partner for FMCG and
              pharmaceutical companies since 2001. With precision machinery,
              certified processes, and a team of dedicated specialists, we
              deliver aluminum foil printing that meets the world's highest
              standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: "Our Mission",
                title: "Elevating Packaging Standards",
                desc: "To be the most trusted aluminum foil printing partner for FMCG and pharmaceutical companies, delivering consistent quality, regulatory compliance, and on-time delivery for every order — regardless of complexity or scale.",
              },
              {
                label: "Our Vision",
                title: "Global Packaging Leadership",
                desc: "To expand our footprint across 30+ countries by 2030, pioneering sustainable foil printing practices while maintaining the quality benchmarks that have defined SS Enterprises for over two decades.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="bg-card border-border shadow-card p-8 h-full">
                  <Badge
                    variant="outline"
                    className="border-primary/40 text-primary text-xs uppercase tracking-widest px-3 py-1 mb-4"
                  >
                    {item.label}
                  </Badge>
                  <h2 className="font-display font-bold text-xl text-foreground mb-3">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30" data-ocid="timeline-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">
              Timeline
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight">
              Our Journey
            </h2>
          </motion.div>

          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-6"
                data-ocid={`milestone-${i}`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-card">
                    <span className="text-primary-foreground text-xs font-display font-bold">
                      {m.year.slice(2)}
                    </span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 bg-border flex-1 my-1 min-h-8" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-primary font-display font-bold text-sm mb-1">
                    {m.year}
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base mb-1">
                    {m.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">
              What Drives Us
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Card className="bg-card border-border shadow-card h-full p-6 hover:shadow-elevated transition-smooth">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-display font-bold text-sm">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">
              Compliance
            </p>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight">
              Certifications & Standards
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="flex items-center gap-3 bg-card border border-border rounded-lg px-5 py-4 shadow-card"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground text-sm font-medium">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-primary-foreground mb-4 tracking-tight">
            Partner With Us
          </h2>
          <p className="text-primary-foreground/80 mb-8 font-body">
            Join 500+ companies that trust SS Enterprises for their aluminum
            foil packaging needs.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="font-display font-semibold gap-2"
              data-ocid="about-cta-btn"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
