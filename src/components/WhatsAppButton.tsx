import { useState } from "react";
import { MessageCircle } from "lucide-react";
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
          <MessageCircle className="h-7 w-7 md:h-8 md:w-8 group-hover:scale-110 transition-spring" />
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
