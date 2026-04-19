import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface ClientLocation {
  country: string;
  city: string;
  industry: string;
  clients: number;
  region: string;
}

const clientLocations: ClientLocation[] = [
  {
    country: "India",
    city: "Mumbai",
    industry: "FMCG & Pharma",
    clients: 120,
    region: "South Asia",
  },
  {
    country: "India",
    city: "Delhi",
    industry: "FMCG",
    clients: 85,
    region: "South Asia",
  },
  {
    country: "India",
    city: "Ahmedabad",
    industry: "Pharma",
    clients: 60,
    region: "South Asia",
  },
  {
    country: "Bangladesh",
    city: "Dhaka",
    industry: "FMCG",
    clients: 25,
    region: "South Asia",
  },
  {
    country: "Sri Lanka",
    city: "Colombo",
    industry: "Pharma",
    clients: 15,
    region: "South Asia",
  },
  {
    country: "UAE",
    city: "Dubai",
    industry: "FMCG",
    clients: 35,
    region: "Middle East",
  },
  {
    country: "Saudi Arabia",
    city: "Riyadh",
    industry: "Pharma",
    clients: 22,
    region: "Middle East",
  },
  {
    country: "Egypt",
    city: "Cairo",
    industry: "FMCG",
    clients: 16,
    region: "Middle East",
  },
  {
    country: "Singapore",
    city: "Singapore",
    industry: "FMCG & Pharma",
    clients: 28,
    region: "Southeast Asia",
  },
  {
    country: "Malaysia",
    city: "Kuala Lumpur",
    industry: "FMCG",
    clients: 20,
    region: "Southeast Asia",
  },
  {
    country: "Nigeria",
    city: "Lagos",
    industry: "FMCG",
    clients: 18,
    region: "Africa",
  },
  {
    country: "Kenya",
    city: "Nairobi",
    industry: "Pharma",
    clients: 14,
    region: "Africa",
  },
  {
    country: "South Africa",
    city: "Johannesburg",
    industry: "Industrial",
    clients: 11,
    region: "Africa",
  },
  {
    country: "UK",
    city: "London",
    industry: "Pharma",
    clients: 12,
    region: "Europe",
  },
  {
    country: "Germany",
    city: "Frankfurt",
    industry: "Industrial",
    clients: 10,
    region: "Europe",
  },
];

const regionColors: Record<string, string> = {
  "South Asia": "bg-blue-500/10 text-blue-700 border-blue-200",
  "Middle East": "bg-amber-500/10 text-amber-700 border-amber-200",
  "Southeast Asia": "bg-emerald-500/10 text-emerald-700 border-emerald-200",
  Africa: "bg-orange-500/10 text-orange-700 border-orange-200",
  Europe: "bg-violet-500/10 text-violet-700 border-violet-200",
};

const regionDotColors: Record<string, string> = {
  "South Asia": "bg-blue-500",
  "Middle East": "bg-amber-500",
  "Southeast Asia": "bg-emerald-500",
  Africa: "bg-orange-500",
  Europe: "bg-violet-500",
};

const regions = Object.keys(regionColors);

const clientLogos = [
  { name: "ITC Limited", sector: "FMCG" },
  { name: "Sun Pharma", sector: "Pharmaceutical" },
  { name: "Nestle India", sector: "FMCG" },
  { name: "Cipla Ltd", sector: "Pharmaceutical" },
  { name: "Britannia Industries", sector: "FMCG" },
  { name: "Dr. Reddy's Labs", sector: "Pharmaceutical" },
  { name: "Dabur India", sector: "FMCG" },
  { name: "Lupin Limited", sector: "Pharmaceutical" },
];

export default function ClientsPage() {
  const byRegion = regions.map((region) => ({
    region,
    locations: clientLocations.filter((l) => l.region === region),
  }));

  return (
    <div>
      {/* Hero */}
      <section
        className="bg-card border-b border-border py-16 md:py-20"
        data-ocid="clients.hero"
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
              Global Reach
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-5">
              Trusted by Industry Leaders Worldwide
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              SS Enterprises supplies aluminum foil solutions to 500+ clients
              across 15 countries, spanning FMCG, pharmaceutical, and industrial
              sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "500+", label: "Active Clients" },
              { value: "15", label: "Countries" },
              { value: "3", label: "Sectors Served" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-display font-bold text-3xl md:text-4xl text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Supply Network */}
      <section
        className="py-20 bg-background"
        data-ocid="clients.network-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">
              Supply Locations
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground tracking-tight mb-4">
              Our Global Supply Network
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Active supply operations across 5 regions — from South Asia to
              Europe, serving FMCG, pharma, and industrial clients.
            </p>
          </motion.div>

          {/* Region legend */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mt-8 mb-12"
          >
            {regions.map((region) => (
              <div
                key={region}
                className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-sm font-body"
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${regionDotColors[region]}`}
                />
                <span className="text-foreground font-medium">{region}</span>
                <span className="text-muted-foreground text-xs">
                  {clientLocations.filter((l) => l.region === region).length}{" "}
                  cities
                </span>
              </div>
            ))}
          </motion.div>

          {/* Region panels */}
          <div className="space-y-10" data-ocid="clients.location-list">
            {byRegion.map((group, gi) => (
              <motion.div
                key={group.region}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`w-3 h-3 rounded-full ${regionDotColors[group.region]}`}
                  />
                  <h3 className="font-display font-semibold text-foreground text-lg">
                    {group.region}
                  </h3>
                  <span className="text-muted-foreground text-sm font-body">
                    — {group.locations.reduce((s, l) => s + l.clients, 0)}{" "}
                    clients
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {group.locations.map((loc, i) => (
                    <motion.div
                      key={`${loc.country}-${loc.city}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      data-ocid={`clients.location.${gi * 5 + i + 1}`}
                    >
                      <Card className="bg-card border-border shadow-card hover:shadow-elevated transition-smooth h-full">
                        <CardContent className="p-4 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <MapPin className="w-4 h-4 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-display font-semibold text-foreground text-sm leading-tight">
                              {loc.city}
                            </div>
                            <div className="text-muted-foreground text-xs mt-0.5">
                              {loc.country}
                            </div>
                            <div className="flex items-center gap-2 mt-2 flex-wrap">
                              <Badge
                                variant="outline"
                                className={`text-xs px-2 py-0 border ${regionColors[loc.region]}`}
                              >
                                {loc.industry}
                              </Badge>
                              <span className="text-primary text-xs font-medium">
                                {loc.clients} clients
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence callout */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-foreground text-xl mb-1">
                Expanding Supply Reach
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-2xl">
                SS Enterprises is actively onboarding new clients across
                Southeast Asia, the Middle East, and African markets. Our
                logistics network ensures reliable delivery to over 15 countries
                with consistent quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Clients */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">
              Partners
            </p>
            <h2 className="font-display font-bold text-3xl text-foreground tracking-tight">
              Key Industry Partners
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clientLogos.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`clients.partner.${i + 1}`}
              >
                <Card className="bg-card border-border shadow-card hover:shadow-elevated transition-smooth">
                  <CardContent className="p-5 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-display font-bold text-base">
                        {client.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                    <div className="font-display font-semibold text-foreground text-sm">
                      {client.name}
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs border-primary/30 text-primary mt-2"
                    >
                      {client.sector}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
