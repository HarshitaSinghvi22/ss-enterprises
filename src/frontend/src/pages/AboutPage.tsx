import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { motion } from "motion/react";

const milestones = [
  {
    year: "1994",
    title: "Founded by M.K. Singhvi",
    desc: "SS Enterprises was established in Mumbai by Mr. M.K. Singhvi, beginning operations as a family-owned specialist in aluminum foil packaging for the pharmaceutical industry.",
  },
  {
    year: "2000",
    title: "Pharmaceutical-Grade Foil Production",
    desc: "Expanded manufacturing capacity with dedicated pharmaceutical-grade blister and strip foil lines, meeting stringent GMP requirements for major pharma clients.",
  },
  {
    year: "2008",
    title: "ISO 9001 Certification",
    desc: "Achieved ISO 9001 Quality Management System certification, formalising the quality processes that had defined SS Enterprises from the outset.",
  },
  {
    year: "2012",
    title: "Karnataka Manufacturing Plant",
    desc: "Commissioned a second manufacturing facility in Hosakote, Bengaluru, Karnataka — enabling faster turnaround for South India and further expanding national supply capacity.",
  },
  {
    year: "2017",
    title: "ISO 15378:2017 — Pharmaceutical Packaging Standard",
    desc: "Earned ISO 15378:2017 certification, the internationally recognised standard for primary packaging materials for medicinal products, reinforcing our pharma credentials.",
  },
  {
    year: "2024",
    title: "30 Years of Trusted Partnership",
    desc: "Celebrating three decades of excellence — serving 500+ clients across 15+ countries with manufacturing units in Vasai, Palghar (Maharashtra) and Hosakote (Karnataka).",
  },
];

const values = [
  {
    title: "Precision",
    desc: "Every micron matters. Our processes are calibrated to tight tolerances and validated for repeatable quality across every production run.",
  },
  {
    title: "Integrity",
    desc: "Transparent pricing, honest timelines, and accountability at every stage — from raw material sourcing to final delivery.",
  },
  {
    title: "Innovation",
    desc: "Continuous investment in modern machinery and process R&D to stay ahead of evolving pharmaceutical and FMCG packaging demands.",
  },
  {
    title: "Partnership",
    desc: "As a family-owned business for 30+ years, we view every client relationship as a long-term partnership built on trust.",
  },
];

const certifications = [
  {
    title: "ISO 9001:2015",
    desc: "Quality Management System",
  },
  {
    title: "ISO 15378:2017",
    desc: "Primary Packaging for Medicinal Products",
  },
  {
    title: "FDA Approved Vendor",
    desc: "U.S. Food & Drug Administration Compliance",
  },
];

const locations = [
  { region: "Head Office", place: "Andheri East, Mumbai, Maharashtra" },
  { region: "Plant 1", place: "Vasai, Maharashtra" },
  { region: "Plant 2", place: "Palghar, Maharashtra" },
  { region: "Plant 3", place: "Hosakote, Bengaluru, Karnataka" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="bg-card border-b border-border py-16 md:py-20"
        data-ocid="about.hero"
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
              30 Years of Packaging Excellence
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Founded in 1994 by Mr. M.K. Singhvi, SS Enterprises is a
              family-owned manufacturer of primary and secondary packaging
              solutions for the pharmaceutical and FMCG industries. With four
              facilities across Maharashtra and Karnataka, we serve 500+ clients
              in 15+ countries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background" data-ocid="about.mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: "Our Mission",
                title: "Trusted Packaging, Every Order",
                desc: "To be the most reliable packaging partner for pharmaceutical and FMCG companies — delivering consistent quality, full regulatory compliance, and on-time fulfilment regardless of order complexity or scale.",
              },
              {
                label: "Our Vision",
                title: "Leading with Quality Globally",
                desc: "To continuously raise the benchmark for packaging standards, expanding our global reach while upholding the family values of trust, precision, and long-term partnership that have guided us since 1994.",
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

      {/* Manufacturing Locations */}
      <section className="py-16 bg-muted/30" data-ocid="about.locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">
              Presence
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight">
              Our Facilities
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.region}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 bg-card border border-border rounded-lg px-5 py-4 shadow-card"
                data-ocid={`about.location.${i + 1}`}
              >
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-1">
                    {loc.region}
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {loc.place}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background" data-ocid="about.timeline">
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
                data-ocid={`about.milestone.${i + 1}`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-card">
                    <span className="text-primary-foreground text-[10px] font-display font-bold">
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
      <section className="py-20 bg-muted/30" data-ocid="about.values">
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
      <section className="py-16 bg-background" data-ocid="about.certifications">
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
              Certifications &amp; Standards
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex flex-col items-center text-center gap-3 bg-card border border-border rounded-xl px-6 py-6 shadow-card"
                data-ocid={`about.certification.${i + 1}`}
              >
                <CheckCircle2 className="w-7 h-7 text-primary" />
                <div>
                  <div className="text-foreground font-display font-bold text-base mb-1">
                    {cert.title}
                  </div>
                  <div className="text-muted-foreground text-xs leading-relaxed">
                    {cert.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary" data-ocid="about.cta">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-primary-foreground mb-4 tracking-tight">
            Partner With Us
          </h2>
          <p className="text-primary-foreground/80 mb-8 font-body">
            Join 500+ companies that trust SS Enterprises for their
            pharmaceutical and FMCG packaging needs.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="font-display font-semibold gap-2"
              data-ocid="about.cta-btn"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
