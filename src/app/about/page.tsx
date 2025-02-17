import { Users, Award, Clock, Shield, Building2, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { value: "5+", label: "Années d'expérience" },
    { value: "150+", label: "Clients satisfaits" },
    { value: "30+", label: "Employés qualifiés" },
    { value: "1000+", label: "Interventions réussies" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Un service constant et professionnel sur lequel vous pouvez compter"
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Une équipe formée et qualifiée pour des prestations de qualité"
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "Un engagement quotidien vers la satisfaction client"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            À Propos de ProNet Lille
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Votre partenaire de confiance pour le nettoyage professionnel depuis 2018
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-medium bg-blue-50 px-4 py-2 rounded-full text-sm">
                Notre Histoire
              </span>
              <h2 className="text-3xl font-bold mt-4 mb-6">
                Une entreprise locale, une expertise reconnue
              </h2>
              <p className="text-gray-600 mb-6">
                Fondée en 2018 à Lille, ProNet s'est rapidement imposée comme un acteur 
                majeur du nettoyage professionnel dans la métropole lilloise. Notre 
                croissance repose sur des valeurs fortes et un engagement constant 
                envers la qualité de service.
              </p>
              <p className="text-gray-600 mb-6">
                Aujourd'hui, notre équipe de plus de 30 professionnels qualifiés 
                intervient quotidiennement auprès d'entreprises de toutes tailles, 
                garantissant des prestations sur-mesure et un service irréprochable.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/team.jpg"
                alt="L'équipe ProNet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-medium bg-blue-50 px-4 py-2 rounded-full text-sm">
              Nos Valeurs
            </span>
            <h2 className="text-3xl font-bold mt-4 mb-6">
              Ce qui nous définit
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <value.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Découvrez comment nous pouvons vous aider à maintenir vos locaux impeccables
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-colors inline-block"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  );
} 