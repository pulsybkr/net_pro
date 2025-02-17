import { Building2, Building, Briefcase, Store, LibrarySquare, School, Hotel, ShoppingBag, Stethoscope } from "lucide-react";

export default function ClientTypes() {
  const clientTypes = [
    {
      icon: Building2,
      title: "Bureaux & Open Spaces",
      description: "Nettoyage adapté aux espaces de travail modernes",
      examples: "Start-ups, PME, Grands Groupes"
    },
    {
      icon: LibrarySquare,
      title: "Secteur Bancaire",
      description: "Entretien discret et sécurisé",
      examples: "Banques, Assurances, Cabinets Comptables"
    },
    {
      icon: Stethoscope,
      title: "Secteur Médical",
      description: "Désinfection selon les normes sanitaires",
      examples: "Cabinets Médicaux, Cliniques, Laboratoires"
    },
    {
      icon: Store,
      title: "Commerces",
      description: "Nettoyage avant/après heures d'ouverture",
      examples: "Boutiques, Showrooms, Agences"
    },
    {
      icon: School,
      title: "Établissements Éducatifs",
      description: "Entretien adapté aux lieux d'enseignement",
      examples: "Écoles de Commerce, Centres de Formation"
    },
    {
      icon: Hotel,
      title: "Hôtellerie",
      description: "Service discret et professionnel",
      examples: "Hôtels, Résidences d'Affaires"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-blue-600 font-medium bg-blue-50 px-4 py-2 rounded-full text-sm">
            Nos Secteurs d'Intervention
          </span>
          <h2 className="text-4xl font-bold">
            Nous accompagnons{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              tous types d'entreprises
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Des solutions de nettoyage adaptées à votre secteur d'activité, avec une approche personnalisée
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <client.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {client.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {client.description}
                </p>
                
                <div className="text-sm">
                  <span className="text-blue-600 font-semibold">Secteurs : </span>
                  <span className="text-gray-500">{client.examples}</span>
                </div>
              </div>

              {/* Effet de fond au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Effet de bordure animée */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 w-0 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Section Statistiques avec design amélioré */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />
          <div className="relative z-10">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="font-bold text-4xl mb-2">100%</div>
                <div className="text-blue-100 font-medium">Satisfaction Client</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-4xl mb-2">24/7</div>
                <div className="text-blue-100 font-medium">Service Flexible</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-4xl mb-2">-20%</div>
                <div className="text-blue-100 font-medium">Sur le 1er Mois</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA amélioré */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 text-lg">
            Vous ne trouvez pas votre secteur d'activité ? <br />
            Nous développons des solutions sur mesure pour chaque client.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-blue-100">
            Demander un Devis Personnalisé
          </button>
        </div>
      </div>
    </section>
  );
} 