import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send } from "lucide-react";

interface ContactFormProps {
  variant?: "default" | "popup";
  onSuccess?: () => void;
}

const ContactForm = ({ variant = "default", onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d)(\d{4})$/, "$1-$2");
    }
    return value.slice(0, 15);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({ ...formData, telefone: formatted });
  };

  const getUTMParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      gclid: params.get("gclid") || "",
      gbraid: params.get("gbraid") || "",
      fbc: params.get("fbc") || "",
    };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.telefone) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    const phoneNumbers = formData.telefone.replace(/\D/g, "");
    if (phoneNumbers.length < 10) {
      toast.error("Por favor, insira um telefone válido");
      return;
    }

    setIsSubmitting(true);

    try {
      const utmParams = getUTMParams();
      const payload = {
        ...formData,
        ...utmParams,
        page_url: window.location.href,
      };

      // Send to webhook
      const response = await fetch(
        "https://hook.us1.make.com/nro1wpzd5clnyeegzgziha2s9p9hwjgm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        // Trigger GTM event
        if (window.dataLayer) {
          window.dataLayer.push({
            event: "form_submission",
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone,
          });
        }

        toast.success("Mensagem enviada! Redirecionando para WhatsApp...");
        
        // Reset form
        setFormData({ nome: "", email: "", telefone: "" });
        
        // Redirect to WhatsApp
        setTimeout(() => {
          const message = encodeURIComponent(
            `Olá! Me chamo ${formData.nome} e gostaria de falar com um advogado especialista.`
          );
          window.open(
            `https://wa.me/5561984885377?text=${message}`,
            "_blank"
          );
          onSuccess?.();
        }, 1500);
      } else {
        throw new Error("Erro ao enviar formulário");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor={`nome-${variant}`} className="text-sm font-medium">
          Nome Completo *
        </Label>
        <Input
          id={`nome-${variant}`}
          type="text"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          placeholder="Digite seu nome"
          required
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`email-${variant}`} className="text-sm font-medium">
          E-mail *
        </Label>
        <Input
          id={`email-${variant}`}
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="seu@email.com"
          required
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`telefone-${variant}`} className="text-sm font-medium">
          Telefone (WhatsApp) *
        </Label>
        <Input
          id={`telefone-${variant}`}
          type="tel"
          value={formData.telefone}
          onChange={handlePhoneChange}
          placeholder="(61) 99999-9999"
          required
          maxLength={15}
          className="h-12"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        variant="whatsapp"
        className="w-full px-8 py-5 h-auto font-semibold text-sm sm:text-base transition-spring"
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            ENVIAR E SOLICITAR ANÁLISE
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
};

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default ContactForm;
