import { motion } from "framer-motion";
import { Phone, MapPin, Globe } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Get in Touch</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Contact <span className="text-gradient-gold">Us</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          {[
            { icon: Phone, label: "Phone / WhatsApp", value: "+91 90470 21676", href: "tel:+919047021676" },
            { icon: Globe, label: "Website", value: "uniqueboutiqueart.com", href: "https://uniqueboutiqueart.com" },
            {
              icon: MapPin,
              label: "Location",
              value: "163/23, 7th Cross Road East, Arulananda Nagar East Extension, Thanjavur – 613007, Tamil Nadu",
              href: "https://maps.google.com/?q=Arulananda+Nagar+East+Extension+Thanjavur",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <c.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">{c.label}</p>
                <p className="font-body text-foreground font-medium">{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-sm overflow-hidden border border-gold/10 shadow-gold aspect-square md:aspect-auto">
          <iframe
            title="Unique Boutique Location - Thanjavur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8!2d79.13!3d10.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzI0LjAiTiA3OcKwMDcnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 300 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
