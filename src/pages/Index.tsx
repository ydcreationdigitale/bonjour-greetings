import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Zap, Image, Type, Palette, Download, CheckCircle2 } from "lucide-react";
import canvaHero from "@/assets/canva-hero.jpg";
import step1Templates from "@/assets/step1-templates.jpg";
import step2Customize from "@/assets/step2-customize.jpg";
import step3Elements from "@/assets/step3-elements.jpg";
import step4Export from "@/assets/step4-export.jpg";

const Index = () => {
  const [openItem, setOpenItem] = useState<string>("step1");

  const steps = [
    {
      id: "step1",
      title: "Étape 1 : Choisir un Template",
      icon: Image,
      duration: "1 minute",
      image: step1Templates,
      content: {
        description: "Commencez par sélectionner le format parfait pour votre projet. Canva Express propose des milliers de templates professionnels.",
        tips: [
          "Parcourez les catégories : Posts Instagram, Stories, Facebook, LinkedIn",
          "Utilisez la barre de recherche pour trouver rapidement un style spécifique",
          "Filtrez par couleur, thème ou occasion",
          "Prévisualisez avant de choisir en survolant les templates"
        ],
        astuce: "Astuce Pro : Les templates 'tendance' sont mis à jour chaque semaine !"
      }
    },
    {
      id: "step2",
      title: "Étape 2 : Personnaliser les Textes",
      icon: Type,
      duration: "1 minute",
      image: step2Customize,
      content: {
        description: "Personnalisez votre message avec les outils de texte puissants de Canva Express.",
        tips: [
          "Double-cliquez sur n'importe quel texte pour le modifier",
          "Changez la police en cliquant sur le menu déroulant",
          "Ajustez la taille avec le curseur ou les raccourcis Ctrl +/-",
          "Utilisez les effets de texte : ombres, contours, effets 3D"
        ],
        astuce: "Astuce Pro : Gardez maximum 2-3 polices différentes par design pour un look cohérent."
      }
    },
    {
      id: "step3",
      title: "Étape 3 : Ajouter des Éléments",
      icon: Palette,
      duration: "1 minute",
      image: step3Elements,
      content: {
        description: "Enrichissez votre design avec des éléments visuels captivants.",
        tips: [
          "Cliquez sur 'Éléments' dans le menu latéral",
          "Explorez les catégories : Formes, Lignes, Autocollants, Illustrations",
          "Utilisez la recherche pour trouver des icônes spécifiques",
          "Redimensionnez et repositionnez par glisser-déposer",
          "Changez les couleurs des éléments pour matcher votre palette"
        ],
        astuce: "Astuce Pro : Les éléments transparents créent de la profondeur et du dynamisme !"
      }
    },
    {
      id: "step4",
      title: "Étape 4 : Ajuster les Couleurs",
      icon: Sparkles,
      duration: "30 secondes",
      image: step2Customize,
      content: {
        description: "Créez une identité visuelle cohérente avec la palette de couleurs.",
        tips: [
          "Cliquez sur n'importe quel élément puis sur le carré de couleur",
          "Utilisez le sélecteur de couleur ou entrez un code HEX",
          "Explorez les palettes suggérées basées sur votre template",
          "Créez et sauvegardez votre propre palette de marque"
        ],
        astuce: "Astuce Pro : Utilisez des couleurs complémentaires pour faire ressortir les éléments clés."
      }
    },
    {
      id: "step5",
      title: "Étape 5 : Télécharger & Partager",
      icon: Download,
      duration: "30 secondes",
      image: step4Export,
      content: {
        description: "Exportez votre création dans le format parfait pour vos besoins.",
        tips: [
          "Cliquez sur 'Télécharger' ou 'Partager' en haut à droite",
          "Choisissez le format : PNG (qualité), JPG (léger), PDF (impression)",
          "Ajustez la qualité d'export selon votre usage",
          "Partagez directement sur les réseaux sociaux",
          "Téléchargez en haute résolution pour l'impression"
        ],
        astuce: "Astuce Pro : PNG avec fond transparent est idéal pour les logos et overlays !"
      }
    }
  ];

  const quickTips = [
    {
      icon: Zap,
      title: "Raccourcis Clavier",
      tip: "Ctrl+C/V pour copier/coller, Ctrl+Z pour annuler"
    },
    {
      icon: Clock,
      title: "Gestion du Temps",
      tip: "Utilisez les templates pour gagner 80% du temps de création"
    },
    {
      icon: CheckCircle2,
      title: "Qualité Pro",
      tip: "Exportez toujours en haute résolution pour un rendu optimal"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary text-primary-foreground">
                <Sparkles className="w-4 h-4 mr-2" />
                Formation Gratuite
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Canva Express
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground">
                Crée un visuel pro en 5 minutes
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Découvrez comment créer des visuels professionnels rapidement et facilement, même sans expérience en design. Cette formation interactive vous guide étape par étape.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">5 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border">
                  <Zap className="w-5 h-5 text-secondary" />
                  <span className="font-semibold">100% Pratique</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-semibold">Résultats Garantis</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-delay">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-20"></div>
              <img 
                src={canvaHero} 
                alt="Canva Express Interface" 
                className="relative rounded-2xl shadow-2xl border-4 border-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Guide Étape par Étape
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Suivez ces 5 étapes simples pour créer votre premier visuel professionnel
          </p>
        </div>

        <Accordion 
          type="single" 
          collapsible 
          value={openItem} 
          onValueChange={setOpenItem}
          className="max-w-4xl mx-auto space-y-4"
        >
          {steps.map((step, index) => (
            <AccordionItem 
              key={step.id} 
              value={step.id}
              className="border-2 border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-grow text-left">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                  </div>
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.content.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Points clés :</h4>
                      <ul className="space-y-2">
                        {step.content.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                      <p className="text-sm font-medium text-accent-foreground">
                        💡 {step.content.astuce}
                      </p>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="relative rounded-lg shadow-xl border-2 border-border w-full h-full object-cover"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Quick Tips Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Astuces Rapides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickTips.map((tip, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <tip.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Formation créée avec ❤️ by{" "}
            <a 
              href="https://ydcreationdigitale.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              ydcreationdigitale.com
            </a>
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s both;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

export default Index;
