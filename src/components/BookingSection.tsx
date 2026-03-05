import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const BookingSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", date: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    const msg = encodeURIComponent(
      `Hi Unique Boutique Bridal Studio,\n\nName: ${form.name}\nPhone: ${form.phone}\nWedding Date: ${form.date}\nService: ${form.service}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919047021676?text=${msg}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <section id="booking" className="py-24 bg-gradient-ivory">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Book Now</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Schedule Your <span className="text-gradient-gold">Consultation</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card p-8 md:p-12 rounded-sm border border-gold/10 shadow-gold space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">Name *</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                maxLength={100}
                className="border-gold/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">Phone *</label>
              <Input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 XXXXX XXXXX"
                maxLength={15}
                className="border-gold/20 focus:border-primary"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">Wedding Date</label>
              <Input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="border-gold/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">Service Required</label>
              <Select onValueChange={(v) => setForm({ ...form, service: v })}>
                <SelectTrigger className="border-gold/20">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bridal Makeup">Bridal Makeup</SelectItem>
                  <SelectItem value="Jewellery Rental">Jewellery Rental</SelectItem>
                  <SelectItem value="Aari Work">Aari Work</SelectItem>
                  <SelectItem value="Complete Bridal Package">Complete Bridal Package</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="font-body text-sm text-muted-foreground mb-2 block">Message</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us about your wedding plans..."
              maxLength={1000}
              rows={4}
              className="border-gold/20 focus:border-primary"
            />
          </div>

          <Button type="submit" variant="gold" size="xl" className="w-full">
            Book via WhatsApp
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
