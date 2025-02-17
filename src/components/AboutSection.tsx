import Image from "next/image";
import { CheckCircle, Users, Clock, Sparkles } from "lucide-react";

export default function AboutSection() {
  const achievements = [
    { number: "150+", label: "Clients Satisfaits" },
    { number: "1500+", label: "Interventions Réalisées" },
    { number: "98%", label: "Taux de Satisfaction" },
    { number: "24/7", label: "Support Client" },
  ];

  const features = [
    "Équipe jeune et dynamique basée à Lille",
    "Intervention possible 7j/7, adaptée à vos horaires",
    "Personnel formé et vérifié",
    "Produits écologiques et matériel professionnel",
    "Tarification transparente et compétitive",
    "Assurance et garantie incluses",
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Notre Histoire</span>
            </div>

            <h2 className="text-4xl font-bold leading-tight">
              Une nouvelle vision du nettoyage professionnel à{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                Lille
              </span>
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                ProNet Lille est née d'une conviction simple : les entreprises méritent un service de nettoyage aussi dynamique et moderne qu'elles. Notre jeune équipe apporte un souffle nouveau dans le secteur du nettoyage professionnel.
              </p>
              
              <p>
                Notre approche se distingue par sa flexibilité et son adaptation totale à vos besoins. Que vous soyez une start-up, une PME ou une grande entreprise, nous ajustons nos services à votre rythme et à votre budget.
              </p>

              <ul className="grid gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/2_.jpg"
                  alt="Équipe ProNet en action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden mt-8">
                <Image
                  src="/3_.jpg"
                  alt="Nettoyage écologique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/4_.jpg"
                  alt="Nettoyage de bureau"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden mt-8">
                <Image
                  src="/5_.jpg"
                  alt="Nettoyage de vitres"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Carte flottante des statistiques */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 