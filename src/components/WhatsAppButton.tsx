import { useState } from "react";
import whatsappIcon from "@/assets/whatsapp-icon-new.png";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          variant="whatsapp"
          className="h-14 w-14 md:h-16 md:w-16 rounded-full shadow-strong hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] transition-spring group"
          aria-label="Abrir formulário de contato"
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="h-8 w-8 md:h-9 md:w-9 group-hover:scale-110 transition-spring"
          />
        </Button>
      </div>

      {/* Popup Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-primary">Fale com um Especialista</DialogTitle>
          </DialogHeader>

          <div className="mt-4">
            <p className="text-muted-foreground mb-6">
              Preencha seus dados e nossa equipe entrará em contato via WhatsApp.
            </p>
            <ContactForm variant="popup" onSuccess={() => setIsOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppButton;
