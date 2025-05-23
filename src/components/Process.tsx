import { CalendarCheck, ClipboardList, Clock, CheckCircle, Link } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: CalendarCheck,
      title: "Demande de Devis",
      description: "Remplissez notre formulaire simple et obtenez un devis personnalisé en quelques clics",
      color: "from-salem-700 to-salem-400"
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Visite Technique",
      description: "Un expert évalue vos besoins sur place et propose des solutions adaptées",
      color: "from-indigo-600 to-indigo-400"
    },
    {
      number: "03",
      icon: Clock,
      title: "Planification",
      description: "Nous établissons ensemble un planning d'intervention qui respecte votre activité",
      color: "from-purple-600 to-purple-400"
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Début des Services",
      description: "Notre équipe intervient selon le planning établi, avec un suivi qualité régulier",
      color: "from-cyan-600 to-cyan-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-salem-700 font-medium bg-blue-50 px-4 py-2 rounded-full text-sm inline-block">
            Notre Méthode
          </span>
          <h2 className="text-4xl font-bold">
            Un Processus{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-salem-700 to-salem-400">
              Simple et Efficace
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            De la demande de devis à l'intervention, nous simplifions chaque étape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Numéro flottant */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-r from-salem-700 to-salem-400 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${step.color} p-0.5 mt-4`}>
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <step.icon className={`w-8 h-8 bg-clip-text text-transparent bg-gradient-to-r ${step.color}`} />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-salem-700 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>

                {/* Ligne de connexion */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8">
                    <div className="w-full h-0.5 bg-gradient-to-r from-salem-700 to-salem-400" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="hidden mt-16 text-center bg-gradient-to-r from-salem-700 to-salem-400 rounded-2xl p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">Prêt à commencer ?</h3>
          <p className="mb-8 text-blue-50 max-w-2xl mx-auto">
            Obtenez un devis personnalisé en quelques minutes et découvrez comment nous pouvons vous aider à maintenir vos locaux impeccables.
          </p>
          <Link href="/devis" className="bg-white text-salem-700 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Demander un Devis Gratuit
          </Link>
        </div>
      </div>
    </section>
  );
} 