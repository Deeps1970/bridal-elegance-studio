import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const url =
    "https://wa.me/919047021676?text=" +
    encodeURIComponent("Hi Unique Boutique Bridal Studio, I would like to book a bridal consultation.");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
