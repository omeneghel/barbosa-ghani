import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/50" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Fale Conosco Agora e Garanta Seu Direito
            </h2>
            <p className="text-lg text-muted-foreground">
              Não deixe que a burocracia coloque sua saúde em risco. 
              <br />
              <strong className="text-secondary">Nossa equipe está pronta para analisar seu caso.</strong>
            </p>
          </div>

          <Card className="shadow-strong">
            <CardContent className="p-8 md:p-10">
              <ContactForm variant="default" />
              
              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Ou entre em contato diretamente:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/5561999999999"
                    className="text-secondary hover:text-secondary/80 font-medium transition-smooth"
                  >
                    WhatsApp: (61) 99999-9999
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <a
                    href="mailto:contato@barbosaghani.adv.br"
                    className="text-secondary hover:text-secondary/80 font-medium transition-smooth"
                  >
                    contato@barbosaghani.adv.br
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
