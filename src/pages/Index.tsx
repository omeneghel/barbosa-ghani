import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredibilityBar from "@/components/CredibilityBar";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const whatsAppButtonRef = useRef<{ openPopup: () => void }>(null);

  useEffect(() => {
    // Show WhatsApp button after a short delay
    const timer = setTimeout(() => setShowWhatsApp(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    whatsAppButtonRef.current?.openPopup();
  };

  return (
    <div className="min-h-screen">
      <Header onWhatsAppClick={handleWhatsAppClick} />
      <main className="pt-16">
        <Hero onContactClick={scrollToContact} />
        <CredibilityBar />
        <ServicesSection />
        <AboutSection />
        <DifferentialsSection />
        <ContactSection />
      </main>
      <Footer />
      {showWhatsApp && <WhatsAppButton ref={whatsAppButtonRef} />}
    </div>
  );
};

export default Index;
