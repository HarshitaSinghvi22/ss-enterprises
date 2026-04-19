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
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 9am–6pm IST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ssenterprises.in",
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "MIDC Industrial Area, Andheri East, Mumbai 400093",
    sub: "Maharashtra, India",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday – Saturday",
    sub: "9:00 AM – 6:00 PM IST",
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
    // Simulated submission — replace with actual backend call
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
        data-ocid="contact-hero"
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
              specifications — our team is ready to assist. Reach out and we'll
              respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background" data-ocid="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-1 tracking-tight">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-sm">
                  Our team is here to support your packaging needs.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactDetails.map((item) => (
                  <Card key={item.label} className="border-border shadow-card">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-muted-foreground text-xs uppercase tracking-wide mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-foreground text-sm font-medium break-words">
                          {item.value}
                        </div>
                        <div className="text-muted-foreground text-xs mt-0.5">
                          {item.sub}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
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
                    data-ocid="contact-form"
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
                          data-ocid="input-name"
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
                          data-ocid="input-company"
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
                          data-ocid="input-email"
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
                          data-ocid="input-phone"
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
                          <SelectTrigger data-ocid="select-industry">
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
                          <SelectTrigger data-ocid="select-product">
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
                        data-ocid="input-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="self-start font-display font-semibold tracking-wide gap-2"
                      data-ocid="submit-btn"
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

      {/* Map placeholder */}
      <section className="py-16 bg-muted/30" data-ocid="map-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-2xl text-foreground mb-6 tracking-tight text-center">
              Our Factory Location
            </h2>
            <Card className="border-border shadow-card overflow-hidden">
              <div className="bg-muted/40 h-72 flex flex-col items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div className="text-center">
                  <div className="font-display font-semibold text-foreground text-base">
                    MIDC Industrial Area, Andheri East
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    Mumbai 400093, Maharashtra, India
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=MIDC+Andheri+East+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-display font-semibold border-primary/40 text-primary hover:bg-primary/5"
                    data-ocid="directions-btn"
                  >
                    Get Directions
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
