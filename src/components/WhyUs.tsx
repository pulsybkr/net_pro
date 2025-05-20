import Link from "next/link";
import { Shield, Clock, Award, Brush, Users, Sparkles } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Fiabilité Garantie",
      description: "Personnel qualifié et vérifié, respect des normes d'hygiène les plus strictes",
      color: "from-salem-700 to-salem-400"
    },
    {
      icon: Clock,
      title: "Flexibilité Totale",
      description: "Interventions adaptées à vos horaires, 7j/7 selon vos besoins",
      color: "from-indigo-600 to-indigo-400"
    },
    {
      icon: Users,
      title: "Équipe Dynamique",
      description: "Une équipe jeune et réactive, formée aux dernières techniques de nettoyage",
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: Sparkles,
      title: "Matériel Professionnel",
      description: "Équipements et produits écologiques de dernière génération",
      color: "from-cyan-600 to-cyan-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-salem-700 font-medium bg-blue-50 px-4 py-2 rounded-full text-sm inline-block">
            Nos Avantages
          </span>
          <h2 className="text-4xl font-bold">
            Pourquoi Choisir{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-salem-700 to-salem-400">
              Éclat d’Nord
            </span>
            ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Une approche moderne et efficace du nettoyage professionnel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${reason.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <reason.icon className={`w-8 h-8 bg-clip-text text-transparent bg-gradient-to-r ${reason.color}`} />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-salem-700 transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-gray-600">
                {reason.description}
              </p>

              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r w-0 group-hover:w-full transition-all duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Section bonus */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Une équipe à votre écoute</h3>
              <p className="text-gray-600 mb-6">
                Nous nous adaptons à vos besoins spécifiques et vous accompagnons dans la durée pour garantir votre satisfaction.
              </p>
              <Link href="/#contact" className="bg-salem-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-salem-800 transition-colors">
                Contactez-nous
              </Link>
            </div>
            <div className="hidden grid grid-cols-2 gap-4">
              {[
                { label: "Clients Satisfaits", value: "150+" },
                { label: "Années d'Expérience", value: "5+" },
                { label: "Interventions / Mois", value: "300+" },
                { label: "Équipes Disponibles", value: "10+" }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-xl text-center">
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