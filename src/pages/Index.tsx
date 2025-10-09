import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Show WhatsApp button after a short delay
    const timer = setTimeout(() => setShowWhatsApp(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero onContactClick={scrollToContact} />
        <CredibilityBar />
        <ServicesSection />
        <AboutSection />
        <DifferentialsSection />
        <ContactSection />
      </main>
      <Footer />
      {showWhatsApp && <WhatsAppButton />}
    </div>
  );
};

export default Index;
