import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Shield, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* Section Hero Principal */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Nouveau à Lille : 1er mois -20%</span>
              </div>
              
              <h1 className="text-5xl font-bold leading-tight">
                Gardez vos locaux impeccables,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  concentrez-vous sur l'essentiel
                </span>
              </h1>

              <p className="text-xl text-gray-600">
                Service de nettoyage professionnel flexible et adapté à vos horaires. 
                Devis en 2 minutes, intervention possible dès demain.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg group">
                  <Link href="/devis" className="flex items-center gap-2">
                    Devis Express Gratuit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <Link href="#contact">Nous Contacter</Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Réponse en 2h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Satisfaction garantie</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/1_.jpg"
                alt="Nettoyage professionnel de bureau à Lille"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Caractéristiques */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Flexibilité Totale</h3>
              <p className="text-gray-600">
                Intervention quotidienne, hebdomadaire ou ponctuelle selon vos besoins
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Prix Compétitifs</h3>
              <p className="text-gray-600">
                Tarifs transparents et adaptés à votre budget, sans engagement
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Service Premium</h3>
              <p className="text-gray-600">
                Équipe professionnelle, matériel inclus, produits écologiques
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 