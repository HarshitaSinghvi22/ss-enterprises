import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface ClientLocation {
  country: string;
  city: string;
  industry: string;
  region: string;
}

const clientLocations: ClientLocation[] = [
  {
    country: "India",
    city: "India",
    industry: "Pharmaceutical",
    region: "South Asia",
  },
  {
    country: "Bangladesh",
    city: "Bangladesh",
    industry: "Pharmaceutical",
    region: "South Asia",
  },
  {
    country: "Sri Lanka",
    city: "Sri Lanka",
    industry: "Pharmaceutical",
    region: "South Asia",
  },
  {
    country: "United Arab Emirates",
    city: "United Arab Emirates",
    industry: "Pharmaceutical",
    region: "Middle East",
  },
  {
    country: "Saudi Arabia",
    city: "Saudi Arabia",
    industry: "Pharmaceutical",
    region: "Middle East",
  },
  {
    country: "Oman",
    city: "Oman",
    industry: "Pharmaceutical",
    region: "Middle East",
  },
  {
    country: "Singapore",
    city: "Singapore",
    industry: "Pharmaceutical",
    region: "Southeast Asia",
  },
  {
    country: "Nigeria",
    city: "Nigeria",
    industry: "Pharmaceutical",
    region: "Africa",
  },
  {
    country: "Kenya",
    city: "Kenya",
    industry: "Pharmaceutical",
    region: "Africa",
  },
  {
    country: "Seychelles",
    city: "Seychelles",
    industry: "Pharmaceutical",
    region: "Africa",
  },
  {
    country: "Congo",
    city: "Congo",
    industry: "Pharmaceutical",
    region: "Africa",
  },
  {
    country: "Switzerland",
    city: "Switzerland",
    industry: "Pharmaceutical",
    region: "Europe",
  },
  {
    country: "United Kingdom",
    city: "United Kingdom",
    industry: "Pharmaceutical",
    region: "Europe",
  },
];

const regionColors: Record<string, string> = {
  "South Asia": "bg-blue-500/10 text-blue-700 border-blue-200",
  "Middle East": "bg-amber-500/10 text-amber-700 border-amber-200",
  Africa: "bg-orange-500/10 text-orange-700 border-orange-200",
  Europe: "bg-violet-500/10 text-violet-700 border-violet-200",
};

const regionDotColors: Record<string, string> = {
  "South Asia": "bg-blue-500",
  "Middle East": "bg-amber-500",
  Africa: "bg-orange-500",
  Europe: "bg-violet-500",
};

const regions = Object.keys(regionColors);

const clientLogos = [
  { name: "ITC Limited", sector: "FMCG", logo: "/assets/partners/itc_logo.webp" },
  {
    name: "Sun Pharma",
    sector: "Pharmaceutical",
    logo: "/assets/partners/sunPharma_logo.webp",
  },
  {
    name: "Himalaya Wellness",
    sector: "FMCG",
    logo: "/assets/partners/himalaya_logo.webp",
  },
  {
    name: "Strides Pharma Science",
    sector: "Pharmaceutical",
    logo: "/assets/partners/strides_logo.webp",
  },
  {
    name: "Svizera Pharma",
    sector: "Pharmaceutical",
    logo: "/assets/partners/svizera_logo.webp",
  },
  {
    name: "Medreich Limited",
    sector: "Pharmaceutical",
    logo: "/assets/partners/medreich_logo.webp",
  },
  {
    name: "Adcock Ingram",
    sector: "Pharmaceutical",
    logo: "/assets/partners/adcock_logo.webp",
  },
  { name: "FastandUp", sector: "FMCG", logo: "/assets/partners/fastandup_logo.webp" },
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
              SS Enterprises supplies pharmaceutical aluminum foil solutions to
              businesses across key international markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 text-center">
            {[
              { value: "15+", label: "Countries" },
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
              Active supply operations across pharmaceutical markets in South
              Asia, the Middle East, Africa, and Europe.
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
            {[
              "South Asia",
              "Middle East",
              "Africa",
              "Europe",
            ].map((region) => (
              <div
                key={region}
                className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-sm font-body"
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${regionDotColors[region]}`}
                />
                <span className="text-foreground font-medium">{region}</span>
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
                <Card className="bg-card border-border shadow-card hover:shadow-elevated transition-smooth h-full">
                  <CardContent className="p-5 text-center flex h-full flex-col justify-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="mx-auto mb-3 h-12 w-auto max-w-[120px] object-contain"
                    />
                    <div className="font-display font-semibold text-foreground text-sm">
                      {client.name}
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs border-primary/30 text-primary mt-2 mx-auto"
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
