import { motion } from "framer-motion";
import { Sparkles, Crown, Scissors, Heart } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Bridal Makeup",
    description: "Professional bridal makeup for your special day.",
    items: ["Wedding Bridal Makeup", "Engagement Makeup", "Reception Makeover"],
  },
  {
    icon: Crown,
    title: "Jewellery Rental",
    description: "Stunning wedding jewellery collections for rent.",
    items: ["Bridal Jewellery Sets", "Temple Jewellery", "Reception Jewellery"],
  },
  {
    icon: Scissors,
    title: "Boutique & Aari Work",
    description: "Designer blouse stitching with exquisite Aari embroidery.",
    items: ["Designer Blouse Stitching", "Aari Embroidery", "Bridal Blouse Customization"],
  },
  {
    icon: Heart,
    title: "Bridal Styling",
    description: "Complete bridal look consultation and styling.",
    items: ["Complete Look Consultation", "Jewellery Matching with Outfits"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Our <span className="text-gradient-gold">Services</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-card p-8 rounded-sm border border-gold/10 hover:shadow-gold hover:border-gold/30 transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <service.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
            <p className="font-body text-muted-foreground text-sm mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li key={item} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
