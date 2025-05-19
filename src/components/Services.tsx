import { Check, Sparkles, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Nettoyage de Bureaux",
      description: "Entretien régulier des espaces de travail, sols, mobilier et équipements",
      features: [
        "Dépoussiérage complet",
        "Nettoyage des sols",
        "Désinfection des surfaces",
        "Entretien mobilier"
      ],
      color: "from-salem-700 to-salem-400",
      popular: true
    },
    {
      title: "Vitrerie",
      description: "Nettoyage professionnel des vitres et surfaces vitrées",
      features: [
        "Vitres intérieures/extérieures",
        "Châssis et encadrements",
        "Vérandas et baies vitrées",
        "Hauteur accessible"
      ],
      color: "from-indigo-600 to-indigo-400",
      popular: false
    },
    {
      title: "Particulier",
      description: "Nettoyage complet de votre maison ou appartement",
      features: [
        "Nettoyage des pièces principales",
        "Entretien cuisine et salle de bain",
        "Dépoussiérage complet",
        "Nettoyage des sols"
      ],
      color: "from-purple-600 to-purple-400",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-salem-700 font-medium bg-blue-50 px-4 py-2 rounded-full text-sm inline-block">
            Nos Services
          </span>
          <h2 className="text-4xl font-bold">
            Des solutions{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-salem-700 to-salem-400">
              clés en main
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Adaptables à toutes les tailles d'entreprise et à tous les budgets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-xl
                ${service.popular ? 'border-2 border-blue-100 shadow-lg' : 'border border-gray-100 shadow-sm'}`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-salem-700 to-salem-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Le plus demandé
                </div>
              )}

              <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <Sparkles className={`w-8 h-8 bg-clip-text text-transparent bg-gradient-to-r ${service.color}`} />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-salem-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                    <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium 
                group-hover:bg-gradient-to-r group-hover:from-salem-700 group-hover:to-salem-400 group-hover:text-white 
                transition-all duration-300 flex items-center justify-center gap-2">
                En savoir plus
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Effet de bordure animée */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r w-0 group-hover:w-full transition-all duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Section Avantages */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Un service sur mesure</h3>
              <p className="text-gray-600 mb-6">
                Nous adaptons nos prestations à vos besoins spécifiques. Fréquence, horaires, matériel... 
                Tout est personnalisable pour répondre au mieux à vos attentes.
              </p>
              <button className="bg-gradient-to-r from-salem-700 to-salem-400 text-white px-6 py-3 rounded-xl font-medium 
                hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:scale-105">
                Demander un devis gratuit
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Satisfaction Client", value: "100%" },
                { label: "Disponibilité", value: "24/7" },
                { label: "Intervention Rapide", value: "< 24h" },
                { label: "Devis Gratuit", value: "2min" }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-salem-700">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 