import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <img
              src={gallery1}
              alt="Bridal makeup artistry at Unique Boutique Thanjavur"
              className="rounded-sm shadow-gold w-full object-cover aspect-[3/4]"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold rounded-sm" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Crafting Bridal <span className="text-gradient-gold">Elegance</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Unique Boutique & Bridal Makeup Tanjore is a premium bridal styling studio helping brides create
            unforgettable wedding looks. Combining professional bridal makeup artistry with designer Aari work
            and bridal jewellery rentals, the studio offers a complete wedding preparation experience.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            {[
              { number: "200+", label: "Happy Brides" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction" },
              { number: "3-in-1", label: "Complete Styling" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-secondary rounded-sm">
                <p className="font-display text-2xl md:text-3xl font-bold text-gradient-gold">{stat.number}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
