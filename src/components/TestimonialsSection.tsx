import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "My bridal look was magical and perfect. The team understood exactly what I wanted and made me feel like a queen on my wedding day.",
    name: "Priya S.",
    role: "Bride, 2024",
  },
  {
    quote: "The jewellery rental was beautiful and affordable. I got compliments from everyone at my wedding!",
    name: "Kavitha R.",
    role: "Bride, 2024",
  },
  {
    quote: "Professional makeup and excellent bridal service. The Aari blouse work was absolutely stunning and unique.",
    name: "Meera K.",
    role: "Bride, 2023",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Words from Our <span className="text-gradient-gold">Brides</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-card p-8 rounded-sm border border-gold/10 relative"
          >
            <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div>
              <p className="font-display text-foreground font-semibold">{t.name}</p>
              <p className="font-body text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
