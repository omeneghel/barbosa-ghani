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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
