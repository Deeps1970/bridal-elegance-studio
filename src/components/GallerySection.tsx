import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Bridal makeup transformation - Unique Boutique Thanjavur", label: "Bridal Makeup" },
  { src: gallery2, alt: "Wedding jewellery collection - Temple jewellery rental", label: "Jewellery Collection" },
  { src: gallery3, alt: "Designer Aari embroidery blouse work", label: "Aari Blouse Work" },
  { src: gallery4, alt: "Wedding photoshoot - Bridal styling Thanjavur", label: "Wedding Photoshoot" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Our Work</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Bridal <span className="text-gradient-gold">Gallery</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={img.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-sm aspect-[3/4]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <p className="font-display text-lg text-primary-foreground font-semibold">{img.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
