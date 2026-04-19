import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const locations = [
  {
    id: "head-office",
    tag: "Head Office",
    name: "SS Enterprises — Mumbai",
    address:
      "A-11 Hindsaurashtra Industrial Estate, Andheri Kurla Road, Andheri East, Mumbai 400059",
    phones: ["022-28518090", "022-28516933", "022-66921956", "022-40146506"],
    email: "mumbai@sspack.in",
    website: "www.sspack.in",
    mapsQuery: "A-11+Hindsaurashtra+Industrial+Estate+Andheri+East+Mumbai",
    accentClass: "bg-primary/10 text-primary border-primary/30",
    badgeClass: "border-primary/40 text-primary",
  },
  {
    id: "plant-1",
    tag: "Plant I — Maharashtra",
    name: "SS Enterprises — Vasai",
    address:
      "Unit 16-18, Raj Tilak Industrial Estate, Chinchpada, Gokhiware, Vasai East, Dist Palghar, Maharashtra",
    phones: ["09323145696"],
    email: "vasai@sspack.in",
    website: null,
    mapsQuery: "Raj+Tilak+Industrial+Estate+Vasai+East+Palghar+Maharashtra",
    accentClass: "bg-accent/10 text-accent border-accent/30",
    badgeClass: "border-accent/40 text-accent",
  },
  {
    id: "plant-2",
    tag: "Plant II — Karnataka",
    name: "SS Enterprises — Bengaluru",
    address:
      "Plot No.58C, Road 1-A, Choklahally Industrial Area, Pillagumpe, Off Chintamani Road, Kasba-Hobli, Hosakote Taluk, Bengaluru, Karnataka 562114",
    phones: ["080-29905736"],
    email: "bangalore@sspack.in",
    website: null,
    mapsQuery: "Choklahally+Industrial+Area+Hosakote+Bengaluru+Karnataka",
    accentClass: "bg-primary/10 text-primary border-primary/30",
    badgeClass: "border-primary/40 text-primary",
  },
];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  product: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  product: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    toast.success(
      "Your enquiry has been sent! We'll be in touch within 24 hours.",
    );
    setForm(initialForm);
    setSubmitting(false);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="bg-card border-b border-border py-16 md:py-20"
        data-ocid="contact.hero"
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
              Get In Touch
            </Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-5">
              Start a Conversation
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Whether you need a custom quote, product samples, or technical
              specifications — our team across three locations is ready to
              assist. Reach out and we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Contact Banner */}
      <section className="bg-primary py-8" data-ocid="contact.key-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-primary-foreground/70 text-xs uppercase tracking-widest font-body mb-0.5">
                  Primary Contact
                </div>
                <div className="font-display font-bold text-primary-foreground text-xl">
                  Sumit M Singhvi
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="tel:09820145696"
                className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-smooth"
                data-ocid="contact.key-phone-1"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="font-body font-medium">09820145696</span>
              </a>
              <span className="text-primary-foreground/40 hidden sm:inline">
                |
              </span>
              <a
                href="tel:09322145696"
                className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-smooth"
                data-ocid="contact.key-phone-2"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="font-body font-medium">09322145696</span>
              </a>
              <span className="text-primary-foreground/40 hidden sm:inline">
                |
              </span>
              <a
                href="mailto:sumit@sspack.in"
                className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-smooth"
                data-ocid="contact.key-email"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="font-body font-medium">sumit@sspack.in</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-16 bg-background" data-ocid="contact.locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground tracking-tight mb-2">
              Our Locations
            </h2>
            <p className="text-muted-foreground font-body">
              Manufacturing and operations across Mumbai, Vasai, and Bengaluru.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`contact.location.${i + 1}`}
              >
                <Card className="border-border shadow-card h-full">
                  <CardContent className="p-6 flex flex-col gap-5 h-full">
                    <div>
                      <Badge
                        variant="outline"
                        className={`text-xs uppercase tracking-widest px-2 py-0.5 mb-3 ${loc.badgeClass}`}
                      >
                        {loc.tag}
                      </Badge>
                      <h3 className="font-display font-bold text-lg text-foreground tracking-tight">
                        {loc.name}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-4 flex-1">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${loc.accentClass.split(" ").slice(0, 2).join(" ")}`}
                        >
                          <MapPin className="w-3.5 h-3.5" />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed font-body">
                          {loc.address}
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${loc.accentClass.split(" ").slice(0, 2).join(" ")}`}
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          {loc.phones.map((ph) => (
                            <a
                              key={ph}
                              href={`tel:${ph.replace(/-/g, "")}`}
                              className="text-foreground text-sm font-medium hover:text-primary transition-smooth font-body"
                            >
                              {ph}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${loc.accentClass.split(" ").slice(0, 2).join(" ")}`}
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </div>
                        <a
                          href={`mailto:${loc.email}`}
                          className="text-foreground text-sm font-medium hover:text-primary transition-smooth font-body break-all"
                        >
                          {loc.email}
                        </a>
                      </div>

                      {loc.website && (
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${loc.accentClass.split(" ").slice(0, 2).join(" ")}`}
                          >
                            <Globe className="w-3.5 h-3.5" />
                          </div>
                          <a
                            href={`https://${loc.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground text-sm font-medium hover:text-primary transition-smooth font-body"
                          >
                            {loc.website}
                          </a>
                        </div>
                      )}
                    </div>

                    <a
                      href={`https://maps.google.com/?q=${loc.mapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto"
                      data-ocid={`contact.directions-btn.${i + 1}`}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full font-display font-semibold border-primary/30 text-primary hover:bg-primary/5 gap-2"
                      >
                        <MapPin className="w-3.5 h-3.5" /> Get Directions
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours + Enquiry Form */}
      <section
        className="py-16 bg-muted/30"
        data-ocid="contact.enquiry-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-1 tracking-tight">
                  General Information
                </h2>
                <p className="text-muted-foreground text-sm">
                  Our team is here to support your packaging needs.
                </p>
              </div>

              <Card className="border-border shadow-card">
                <CardContent className="p-5 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs uppercase tracking-wide mb-0.5">
                        Working Hours
                      </div>
                      <div className="text-foreground text-sm font-medium">
                        Monday – Saturday
                      </div>
                      <div className="text-muted-foreground text-xs mt-0.5">
                        9:00 AM – 6:00 PM IST
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs uppercase tracking-wide mb-0.5">
                        Head Office
                      </div>
                      <div className="text-foreground text-sm font-medium">
                        Andheri East, Mumbai
                      </div>
                      <div className="text-muted-foreground text-xs mt-0.5">
                        Maharashtra 400059
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs uppercase tracking-wide mb-0.5">
                        Head Office Email
                      </div>
                      <a
                        href="mailto:mumbai@sspack.in"
                        className="text-foreground text-sm font-medium hover:text-primary transition-smooth"
                      >
                        mumbai@sspack.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs uppercase tracking-wide mb-0.5">
                        Head Office Phone
                      </div>
                      <div className="flex flex-col gap-0.5">
                        {[
                          "022-28518090",
                          "022-28516933",
                          "022-66921956",
                          "022-40146506",
                        ].map((ph) => (
                          <a
                            key={ph}
                            href={`tel:${ph.replace(/-/g, "")}`}
                            className="text-foreground text-sm font-medium hover:text-primary transition-smooth"
                          >
                            {ph}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <Card className="border-border shadow-card">
                <CardContent className="p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-1 tracking-tight">
                    Send Us an Enquiry
                  </h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    Fields marked with * are required.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    data-ocid="contact.form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="name"
                          className="font-body text-sm font-medium"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          data-ocid="contact.input-name"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="company"
                          className="font-body text-sm font-medium"
                        >
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          placeholder="Your Company Ltd."
                          value={form.company}
                          onChange={(e) =>
                            handleChange("company", e.target.value)
                          }
                          data-ocid="contact.input-company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="email"
                          className="font-body text-sm font-medium"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={form.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          required
                          data-ocid="contact.input-email"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="phone"
                          className="font-body text-sm font-medium"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          data-ocid="contact.input-phone"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <Label className="font-body text-sm font-medium">
                          Industry
                        </Label>
                        <Select
                          value={form.industry}
                          onValueChange={(v) => handleChange("industry", v)}
                        >
                          <SelectTrigger data-ocid="contact.select-industry">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fmcg">
                              FMCG / Food & Beverage
                            </SelectItem>
                            <SelectItem value="pharma">
                              Pharmaceutical
                            </SelectItem>
                            <SelectItem value="industrial">
                              Industrial
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label className="font-body text-sm font-medium">
                          Product of Interest
                        </Label>
                        <Select
                          value={form.product}
                          onValueChange={(v) => handleChange("product", v)}
                        >
                          <SelectTrigger data-ocid="contact.select-product">
                            <SelectValue placeholder="Select product type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fmcg-foil">
                              FMCG Packaging Foil
                            </SelectItem>
                            <SelectItem value="blister">
                              Pharmaceutical Blister Foil
                            </SelectItem>
                            <SelectItem value="industrial">
                              Industrial Foil
                            </SelectItem>
                            <SelectItem value="custom">
                              Custom Specification
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="message"
                        className="font-body text-sm font-medium"
                      >
                        Message / Requirements *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your packaging requirements, quantities, and any specific technical needs..."
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        required
                        data-ocid="contact.input-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="self-start font-display font-semibold tracking-wide gap-2"
                      data-ocid="contact.submit-btn"
                    >
                      {submitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Send Enquiry
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
