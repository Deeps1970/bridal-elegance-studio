import { motion } from "framer-motion";
import { Award, Palette, Crown, Scissors, Users } from "lucide-react";

const reasons = [
  { icon: Award, text: "Premium Bridal Makeup Artists" },
  { icon: Palette, text: "Complete Bridal Styling Services" },
  { icon: Crown, text: "Wedding Jewellery Rental Collections" },
  { icon: Scissors, text: "Designer Aari Blouse Work" },
  { icon: Users, text: "Trusted by 200+ Brides" },
];

const WhyChooseSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Why Us</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Why Choose <span className="text-gradient-gold">Unique Boutique</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.text}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-4 bg-secondary px-6 py-4 rounded-sm border border-gold/10"
          >
            <r.icon className="w-6 h-6 text-primary shrink-0" />
            <span className="font-body text-foreground font-medium">{r.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
