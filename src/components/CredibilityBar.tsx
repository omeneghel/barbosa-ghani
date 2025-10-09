import { Scale, FileCheck, Users, MapPin } from "lucide-react";

const CredibilityBar = () => {
  const items = [
    {
      icon: Scale,
      title: "+15 anos",
      subtitle: "de experiência combinada"
    },
    {
      icon: FileCheck,
      title: "Especialistas",
      subtitle: "em Liminares Urgentes"
    },
    {
      icon: Users,
      title: "Atendimento",
      subtitle: "Humanizado e Personalizado"
    },
    {
      icon: MapPin,
      title: "Atuação",
      subtitle: "em Todo o Brasil"
    }
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-smooth">
                  <Icon className="h-8 w-8 text-primary group-hover:text-secondary transition-smooth" />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CredibilityBar;
