"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight, ArrowLeft, Calendar, Clock, CheckCircle, Sparkles } from "lucide-react";

export default function DevisPage() {
  const [state, handleSubmit] = useForm("xjkwzpoe"); // Remplacez par votre ID Formspree

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <span className="text-salem-700 font-medium bg-blue-50 px-4 py-2 rounded-full text-sm inline-block mb-4">
              Devis Gratuit
            </span>
            <h1 className="text-4xl font-bold mb-4">
              Votre devis{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-salem-700 to-salem-400">
                personnalisé
              </span>
            </h1>
            <p className="text-gray-600">Réponse garantie sous 2h ouvrées</p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Surface approximative (m²)</label>
                  <input
                    type="number"
                    name="surface"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-salem-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Ex: 100"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Type de local</label>
                  <select
                    name="typeLocal"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-salem-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="bureau">Bureaux open space</option>
                    <option value="commerce">Commerce</option>
                    <option value="medical">Cabinet médical</option>
                    <option value="hotel">Hôtel</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Nom complet</label>
                  <input
                    type="text"
                    name="nom"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-salem-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Email professionnel</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-salem-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="jean@entreprise.fr"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Téléphone</label>
                  <input
                    type="tel"
                    name="telephone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-salem-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Société</label>
                  <input
                    type="text"
                    name="societe"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-salem-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Nom de l'entreprise"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-gray-900">Commentaires additionnels</label>
                  <textarea
                    name="commentaires"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-salem-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none h-32"
                    placeholder="Précisions importantes, contraintes particulières..."
                  ></textarea>
                  <ValidationError prefix="Message" field="commentaires" errors={state.errors} />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-salem-700 to-salem-400"
              >
                {state.submitting ? "Envoi en cours..." : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Obtenir mon devis
                  </>
                )}
              </Button>
              {state.succeeded && (
                <p className="mt-4 text-green-600 text-center">
                  Merci pour votre demande ! Nous vous enverrons votre devis dans les plus brefs délais.
                </p>
              )}
            </div>
          </form>

          {/* Informations complémentaires */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: Clock, text: "Réponse sous 2h" },
              { icon: Calendar, text: "7j/7 - 24h/24" },
              { icon: CheckCircle, text: "Devis gratuit" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-gray-600">
                <item.icon className="w-4 h-4 text-salem-700" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 