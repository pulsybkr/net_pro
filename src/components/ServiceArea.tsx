import { MapPin, Building2, Clock, CheckCircle } from "lucide-react";

export default function ServiceArea() {
  const areas = [
    "Lille Centre",
    "La Madeleine",
    "Lambersart",
    "Lomme",
    "Villeneuve d'Ascq",
    "Roubaix",
    "Tourcoing",
    "Marcq-en-Barœul",
    "Wasquehal",
    "Croix",
    "Mons-en-Barœul",
    "Faches-Thumesnil"
  ];

  const quickFacts = [
    {
      icon: Clock,
      title: "Intervention Rapide",
      description: "Sous 24h dans toute la métropole"
    },
    {
      icon: Building2,
      title: "Tous Types de Locaux",
      description: "Bureaux, commerces, copropriétés"
    },
    {
      icon: CheckCircle,
      title: "Devis Gratuit",
      description: "Réponse sous 2h ouvrées"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Zone d'Intervention
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              {" "}Métropole Lilloise
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Intervention rapide dans toute la métropole lilloise. Déplacement gratuit pour les devis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Google Maps Embed */}
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81874.81716145789!2d2.9737054!3d50.6311592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d579b3256e11%3A0x40af13e81646360!2sLille!5e0!3m2!1sfr!2sfr!4v1647081896404!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Liste des Zones */}
          <div className="space-y-8">
            {/* Quick Facts Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {quickFacts.map((fact, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-md">
                  <fact.icon className="w-6 h-6 text-blue-600 mb-2" />
                  <div className="text-sm font-semibold">{fact.title}</div>
                  <div className="text-xs text-gray-600">{fact.description}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                Communes Desservies
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {areas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Vous ne trouvez pas votre commune ?</h3>
              <p className="mb-4 text-blue-50">
                Contactez-nous pour vérifier si nous intervenons dans votre secteur
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Nous Contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 