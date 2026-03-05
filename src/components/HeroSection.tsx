import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBridal from "@/assets/hero-bridal.jpg";

const HeroSection = () => {
  const whatsappUrl =
    "https://wa.me/919047021676?text=" +
    encodeURIComponent("Hi Unique Boutique Bridal Studio, I would like to book a bridal consultation.");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBridal}
          alt="Elegant Indian bride with gold jewelry - Unique Boutique Bridal Studio Thanjavur"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            Premium Bridal Studio • Thanjavur
          </motion.p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Where Every Bride Becomes{" "}
            <span className="text-gradient-gold italic">Extraordinary</span>
          </h1>

          <p className="font-body text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Premium bridal makeup, designer Aari blouse work, and wedding jewellery rental in Thanjavur.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="gold" size="xl">
                Book Bridal Consultation
              </Button>
            </a>
            <a href="#gallery">
              <Button variant="gold-outline" size="xl" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                View Bridal Gallery
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
