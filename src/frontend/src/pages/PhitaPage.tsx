import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Layers,
  Leaf,
  Package,
  Printer,
  ShoppingBag,
  Stethoscope,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Printer,
    title: "Customized Multi-Color Printing",
    desc: "Available in plain as well as customized multi-color printing as per customer requirements — brand your bundling tape with logos, text, and vibrant graphics.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Alternative",
    desc: "An excellent sustainable substitute for shrink wrap, reducing plastic waste while maintaining secure, professional bundling of products.",
  },
  {
    icon: Stethoscope,
    title: "Pharmaceutical & FMCG Ready",
    desc: "Engineered to meet the demands of pharmaceutical, FMCG, and other regulated industries where presentation and integrity are non-negotiable.",
  },
  {
    icon: Package,
    title: "Ease of Handling",
    desc: "Designed specifically to bundle multiple mono cartons and articles together, simplifying warehouse operations, logistics, and retail stocking.",
  },
  {
    icon: Layers,
    title: "Sustainable Packaging",
    desc: "A forward-looking packaging solution that helps manufacturers meet sustainability targets without compromising on functionality or aesthetics.",
  },
  {
    icon: ShoppingBag,
    title: "Retail-Ready Presentation",
    desc: "Creates clean, professional cluster packs that look great on the shelf and communicate brand identity right through to the point of sale.",
  },
];

const applications = [
  {
    title: "Pharmaceutical Bundling",
    desc: "Group blister strips, tubes, or cartons for over-the-counter and prescription products. Maintains sterility markers and traceability.",
    color: "bg-primary/5 border-primary/20",
    badge: "Pharma",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
  },
  {
    title: "FMCG Product Grouping",
    desc: "Bundle promotional multipacks, family packs, and seasonal combinations without additional outer cartons — faster line speeds, less material.",
    color: "bg-accent/5 border-accent/20",
    badge: "FMCG",
    badgeClass: "bg-accent/10 text-accent border-accent/20",
  },
  {
    title: "Cluster Packaging",
    desc: "Combine individual units into cluster packs for distribution, reducing secondary packaging costs and improving pallet fill rates.",
    color: "bg-primary/5 border-primary/20",
    badge: "Distribution",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
  },
  {
    title: "Retail-Ready Packaging",
    desc: "Create shelf-ready packs that consumers can pick directly from, improving in-store visibility and reducing handling for retailers.",
    color: "bg-accent/5 border-accent/20",
    badge: "Retail",
    badgeClass: "bg-accent/10 text-accent border-accent/20",
  },
];

export default function PhitaPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="bg-card border-b border-border py-16 md:py-24"
        data-ocid="phita.hero"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge
                variant="outline"
                className="border-primary/40 text-primary text-xs uppercase tracking-widest px-3 py-1"
              >
                SS Enterprises Product
              </Badge>
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-display font-bold text-lg tracking-wide">
                फीता
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mb-5 leading-tight">
              PHITA Banding Roll
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-body mb-8 max-w-2xl">
              SS Enterprises' innovative bundling solution — the PHITA banding
              roll (फीता) simplifies multi-carton packaging across
              pharmaceutical, FMCG, and industrial applications. Secure,
              sustainable, and entirely customizable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="font-display font-semibold gap-2"
                  data-ocid="phita.hero_cta"
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-display font-semibold gap-2 border-primary/30 text-primary hover:bg-primary/5"
                  data-ocid="phita.products_link"
                >
                  View All Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is PHITA */}
      <section
        className="py-16 md:py-20 bg-background"
        data-ocid="phita.what_is"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="border-accent/40 text-accent text-xs uppercase tracking-widest px-3 py-1 mb-5"
              >
                What is PHITA?
              </Badge>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight mb-5">
                A Smarter Way to Bundle
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed font-body mb-4">
                <strong className="text-foreground">PHITA</strong> — from the
                Hindi word <em className="text-accent font-semibold">फीता</em>{" "}
                meaning ribbon or tape — is a banding roll developed by SS
                Enterprises to address a critical gap in secondary packaging.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed font-body mb-4">
                It bundles together multiple mono cartons or articles into a
                single, unified pack for ease of handling across pharmaceutical,
                FMCG, and other industries. Whether you need to group blister
                packs, tubes, or FMCG cartons, PHITA keeps them together
                securely throughout the supply chain.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed font-body">
                Unlike traditional shrink wrap, PHITA is eco-friendly, visually
                branded, and easy to apply on existing packaging lines — making
                it the preferred choice for manufacturers who care about
                sustainability and presentation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Industries Served", value: "Pharma, FMCG & more" },
                { label: "Print Options", value: "Plain & Multi-Color" },
                { label: "Eco Alternative", value: "Replaces Shrink Wrap" },
                { label: "Customization", value: "Logo, Text & Graphics" },
              ].map((stat) => (
                <Card
                  key={stat.label}
                  className="border-border shadow-card bg-card"
                >
                  <CardContent className="p-5">
                    <div className="text-muted-foreground text-xs uppercase tracking-wide mb-1 font-body">
                      {stat.label}
                    </div>
                    <div className="text-foreground font-display font-semibold text-base leading-snug">
                      {stat.value}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section
        className="py-16 md:py-20 bg-muted/30"
        data-ocid="phita.features"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <Badge
              variant="outline"
              className="border-primary/40 text-primary text-xs uppercase tracking-widest px-3 py-1 mb-5"
            >
              Key Features
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight mb-4">
              Built for Performance & Sustainability
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Every aspect of PHITA has been designed with the manufacturer's
              operations and the environment in mind.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="phita.features_list"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-ocid={`phita.feature.${i + 1}`}
              >
                <Card className="border-border shadow-card bg-card h-full hover:shadow-elevated transition-smooth">
                  <CardContent className="p-6 flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-base">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section
        className="py-16 md:py-20 bg-background"
        data-ocid="phita.applications"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <Badge
              variant="outline"
              className="border-accent/40 text-accent text-xs uppercase tracking-widest px-3 py-1 mb-5"
            >
              Applications
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight mb-4">
              Where PHITA Makes a Difference
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              From sterile pharmaceutical environments to fast-moving consumer
              goods, PHITA adapts to the packaging challenges of every sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                data-ocid={`phita.application.${i + 1}`}
              >
                <Card className={`border shadow-card h-full ${app.color}`}>
                  <CardContent className="p-7 flex flex-col gap-3">
                    <Badge
                      className={`self-start text-xs font-body ${app.badgeClass}`}
                    >
                      {app.badge}
                    </Badge>
                    <h3 className="font-display font-semibold text-foreground text-lg">
                      {app.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">
                      {app.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary" data-ocid="phita.cta">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-4xl font-display font-bold text-primary-foreground/30 mb-2 tracking-widest">
              फीता
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground tracking-tight mb-4">
              Ready to Switch to PHITA?
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg leading-relaxed mb-8">
              Contact our team to discuss your bundling requirements, request
              samples, or get a custom print quote for your PHITA banding roll.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="font-display font-semibold gap-2 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/70"
                data-ocid="phita.cta_button"
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
