const Footer = () => (
  <footer className="py-12 bg-foreground">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-2xl font-bold text-primary-foreground mb-2">
        Unique <span className="text-gradient-gold">Boutique</span>
      </p>
      <p className="font-body text-sm text-primary-foreground/60 mb-6">
        Premium Bridal Studio • Thanjavur
      </p>
      <div className="border-t border-primary-foreground/10 pt-6">
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Unique Boutique & Bridal Makeup Tanjore. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
