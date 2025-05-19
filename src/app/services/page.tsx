import { Shield, Sparkles, Clock, CheckCircle, Building2, Store, Building, Briefcase } from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Nettoyage de Bureaux",
      description: "Un environnement de travail propre et sain pour une productivité optimale",
      image: "/images/services/bureaux.jpg",
      features: [
        "Dépoussiérage complet du mobilier",
        "Nettoyage et désinfection des surfaces",
        "Entretien des sols (aspiration, lavage)",
        "Vidage des corbeilles",
        "Nettoyage des points de contact",
        "Entretien des espaces communs"
      ],
      included: true
    },
    {
      title: "Vitrerie Professionnelle",
      description: "Des vitres impeccables pour une image professionnelle parfaite",
      image: "/images/services/vitrerie.jpg",
      features: [
        "Nettoyage des vitres intérieures/extérieures",
        "Entretien des châssis et encadrements",
        "Nettoyage des vérandas",
        "Intervention en hauteur sécurisée",
        "Produits professionnels adaptés",
        "Périodicité personnalisable"
      ],
      included: true
    },
    {
      title: "Sanitaires & Vestiaires",
      description: "Une hygiène irréprochable pour vos espaces sanitaires",
      image: "/images/services/sanitaires.jpg",
      features: [
        "Désinfection complète",
        "Détartrage des robinetteries",
        "Nettoyage des miroirs et faïences",
        "Approvisionnement en consommables",
        "Traitement anti-bactérien",
        "Contrôle quotidien"
      ],
      included: true
    }
  ];

  const specialServices = [
    {
      title: "Remise en État",
      description: "Nettoyage approfondi pour les cas spéciaux",
      features: [
        "Décapage des sols",
        "Shampoing moquettes",
        "Cristallisation des marbres",
        "Nettoyage haute pression"
      ]
    },
    {
      title: "Bio-Nettoyage",
      description: "Solutions écologiques et respectueuses",
      features: [
        "Produits éco-labellisés",
        "Techniques douces",
        "Respect de l'environnement",
        "Certification écologique"
      ]
    },
    {
      title: "Services Spécifiques",
      description: "Adaptés à vos besoins particuliers",
      features: [
        "Nettoyage de parkings",
        "Entretien espaces verts",
        "Débarras et évacuation",
        "Travaux en hauteur"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-salem-700 to-salem-400 opacity-90" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Services de Nettoyage Professionnel
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Des solutions complètes et personnalisées pour tous vos besoins
          </p>
        </div>
      </section>

      {/* Services Principaux */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-salem-700 font-medium bg-blue-50 px-4 py-2 rounded-full text-sm">
              Nos Services Principaux
            </span>
            <h2 className="text-3xl font-bold mt-4 mb-6">
              Des prestations adaptées à vos besoins
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos services de nettoyage professionnel, conçus pour répondre 
              aux exigences les plus strictes en matière d'hygiène et de propreté.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Spéciaux */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-salem-700 font-medium bg-blue-50 px-4 py-2 rounded-full text-sm">
              Services Spécialisés
            </span>
            <h2 className="text-3xl font-bold mt-4 mb-6">
              Prestations sur mesure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des services spécifiques pour répondre à vos besoins particuliers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-salem-700"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Pourquoi nous choisir ?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Qualité Garantie",
                description: "Personnel qualifié et produits professionnels"
              },
              {
                icon: Clock,
                title: "Flexibilité",
                description: "Interventions 7j/7, adaptées à vos horaires"
              },
              {
                icon: Sparkles,
                title: "Eco-responsable",
                description: "Produits et méthodes respectueux de l'environnement"
              },
              {
                icon: CheckCircle,
                title: "Suivi Qualité",
                description: "Contrôles réguliers et ajustements si nécessaire"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-salem-700 transition-colors">
                  <item.icon className="w-8 h-8 text-salem-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-salem-700 to-salem-400">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour obtenir un devis personnalisé gratuit
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/devis"
              className="bg-white text-salem-700 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-colors"
            >
              Demander un devis
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 