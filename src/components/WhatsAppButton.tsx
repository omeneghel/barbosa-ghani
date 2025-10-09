import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="h-16 w-16 rounded-full bg-secondary hover:bg-secondary/90 shadow-strong hover:shadow-[0_12px_40px_rgba(197,147,81,0.4)] transition-spring group"
          aria-label="Abrir formulário de contato"
        >
          <MessageCircle className="h-8 w-8 text-primary group-hover:scale-110 transition-spring" />
        </Button>
      </div>

      {/* Popup Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-primary">
              Fale com um Especialista
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            <p className="text-muted-foreground mb-6">
              Preencha seus dados e nossa equipe entrará em contato via WhatsApp.
            </p>
            <ContactForm 
              variant="popup" 
              onSuccess={() => setIsOpen(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppButton;
