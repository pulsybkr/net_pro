"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Building2, ArrowRight, ArrowLeft, Calendar, Clock, CheckCircle, Sparkles } from "lucide-react";

export default function DevisPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations sur le local
    surface: "",
    typeLocal: "",
    nombrePieces: "",
    nombreBureaux: "",
    nombreSanitaires: "",
    etage: false,
    ascenseur: false,

    // Type de prestation
    frequence: "",
    horairePreference: "",
    dateDebut: "",

    // Services spécifiques
    vitres: false,
    moquette: false,
    desinfection: false,
    cuisine: false,
    fournitures: false,
    materiel: false,

    // Informations client
    nom: "",
    email: "",
    telephone: "",
    societe: "",
    poste: "",
    adresse: "",
    codePostal: "",
    ville: "",
    commentaires: ""
  });

  const frequenceOptions = [
    { value: "quotidien", label: "Quotidien" },
    { value: "hebdomadaire", label: "Hebdomadaire" },
    { value: "bi-hebdomadaire", label: "2 fois par semaine" },
    { value: "mensuel", label: "Mensuel" },
    { value: "ponctuel", label: "Intervention ponctuelle" }
  ];

  const horaireOptions = [
    { value: "matin", label: "Matin (6h-9h)" },
    { value: "journee", label: "Journée (9h-17h)" },
    { value: "soir", label: "Soir (17h-22h)" },
    { value: "nuit", label: "Nuit (22h-6h)" },
    { value: "flexible", label: "Flexible" }
  ];

  const handleNext = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

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

          {/* Barre de progression */}
          <div className="mb-12">
            <div className="flex justify-between mb-2">
              {["Local", "Services", "Planning", "Contact"].map((label, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center w-1/4 ${
                    step > index + 1 ? "text-salem-700" : step === index + 1 ? "text-salem-700" : "text-gray-400"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 
                    ${step > index + 1 ? "bg-salem-700 text-white" : 
                      step === index + 1 ? "bg-salem-700 text-white" : 
                      "bg-gray-200"}`}
                  >
                    {step > index + 1 ? <CheckCircle className="w-5 h-5" /> : index + 1}
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
            <div className="relative w-full h-2 bg-gray-200 rounded-full">
              <div
                className="absolute left-0 top-0 h-full bg-salem-700 rounded-full transition-all duration-300"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Formulaire */}
          <form id="devis-form" action="https://formspree.io/f/xblobpky" method="POST" className="bg-white rounded-2xl shadow-xl p-8">
            {step === 1 && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Surface approximative (m²)</label>
                    <Input
                      type="number"
                      name="surface"
                      required
                      value={formData.surface}
                      onChange={(e) => setFormData({...formData, surface: e.target.value})}
                      placeholder="Ex: 100"
                      className="w-full px-4 py-3"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Type de local</label>
                    <Select
                      name="typeLocal"
                      value={formData.typeLocal}
                      onChange={(e) => setFormData({...formData, typeLocal: e.target.value})}
                      required
                      className="w-full"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="bureau">Bureaux open space</option>
                      <option value="commerce">Commerce</option>
                      <option value="medical">Cabinet médical</option>
                      <option value="hotel">Hôtel</option>
                      <option value="autre">Autre</option>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Nombre de pièces</label>
                    <Input
                      type="number"
                      name="nombrePieces" 
                      value={formData.nombrePieces}
                      onChange={(e) => setFormData({...formData, nombrePieces: e.target.value})}
                      placeholder="Ex: 5"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Nombre de sanitaires</label>
                    <Input
                      type="number"
                      name="nombreSanitaires"
                      value={formData.nombreSanitaires}
                      onChange={(e) => setFormData({...formData, nombreSanitaires: e.target.value})}
                      placeholder="Ex: 2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      name="etage"
                      checked={formData.etage}
                      onChange={(e) => setFormData({...formData, etage: e.target.checked})}
                      className="w-4 h-4 text-salem-700"
                    />
                    <span>Étages à nettoyer</span>
                  </label>

                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      name="ascenseur"
                      checked={formData.ascenseur}
                      onChange={(e) => setFormData({...formData, ascenseur: e.target.checked})}
                      className="w-4 h-4 text-salem-700"
                    />
                    <span>Ascenseur disponible</span>
                  </label>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { id: 'vitres', label: 'Nettoyage vitres', icon: '🪟' },
                    { id: 'moquette', label: 'Nettoyage moquette', icon: '🧹' },
                    { id: 'desinfection', label: 'Désinfection', icon: '🧼' },
                    { id: 'cuisine', label: 'Espace cuisine', icon: '🍽️' },
                    { id: 'fournitures', label: 'Fourniture consommables', icon: '📦' },
                    { id: 'materiel', label: 'Matériel fourni', icon: '🧰' },
                  ].map((service) => (
                    <label
                      key={service.id}
                      className={`flex flex-col items-center p-4 border rounded-xl cursor-pointer transition-all
                        ${formData[service.id as keyof typeof formData] ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'}`}
                    >
                      <span className="text-2xl mb-2">{service.icon}</span>
                      <span className="text-sm text-center">{service.label}</span>
                      <input
                        type="checkbox"
                        name={service.id}
                        checked={formData[service.id as keyof typeof formData] as boolean}
                        onChange={(e) => setFormData({...formData, [service.id]: e.target.checked})}
                        className="mt-2 w-4 h-4 text-salem-700"
                      />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Fréquence de passage</label>
                    <Select
                      name="frequence"
                      value={formData.frequence}
                      onChange={(e) => setFormData({...formData, frequence: e.target.value})}
                      required
                      className="w-full"
                    >
                      <option value="">Sélectionnez</option>
                      {frequenceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Horaires préférés</label>
                    <Select
                      name="horairePreference"
                      value={formData.horairePreference}
                      onChange={(e) => setFormData({...formData, horairePreference: e.target.value})}
                      required
                      className="w-full"
                    >
                      <option value="">Sélectionnez</option>
                      {horaireOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Date souhaitée de début</label>
                    <Input
                      type="date"
                      name="dateDebut"
                      value={formData.dateDebut}
                      onChange={(e) => setFormData({...formData, dateDebut: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Nom complet</label>
                    <Input
                      type="text"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={(e) => setFormData({...formData, nom: e.target.value})}
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Email professionnel</label>
                    <Input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jean@entreprise.fr"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Téléphone</label>
                    <Input
                      type="tel"
                      name="telephone"
                      required
                      value={formData.telephone}
                      onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                      placeholder="06 XX XX XX XX"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Société</label>
                    <Input
                      type="text"
                      name="societe"
                      required
                      value={formData.societe}
                      onChange={(e) => setFormData({...formData, societe: e.target.value})}
                      placeholder="Nom de l'entreprise"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Poste occupé</label>
                    <Input
                      type="text"
                      name="poste"
                      value={formData.poste}
                      onChange={(e) => setFormData({...formData, poste: e.target.value})}
                      placeholder="Ex: Responsable Administratif"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Adresse complète</label>
                    <Input
                      type="text"
                      name="adresse"
                      required
                      value={formData.adresse}
                      onChange={(e) => setFormData({...formData, adresse: e.target.value})}
                      placeholder="Numéro et nom de rue"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Code postal</label>
                    <Input
                      type="text"
                      name="codePostal"
                      required
                      value={formData.codePostal}
                      onChange={(e) => setFormData({...formData, codePostal: e.target.value})}
                      placeholder="59000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Ville</label>
                    <Input
                      type="text"
                      name="ville"
                      required
                      value={formData.ville}
                      onChange={(e) => setFormData({...formData, ville: e.target.value})}
                      placeholder="Lille"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-gray-900">Commentaires additionnels</label>
                    <textarea
                      name="commentaires"
                      value={formData.commentaires}
                      onChange={(e) => setFormData({...formData, commentaires: e.target.value})}
                      placeholder="Précisions importantes, contraintes particulières..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-salem-700 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none h-32"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Boutons de navigation */}
            <div className="flex justify-between mt-8 pt-8 border-t">
              {step > 1 && (
                <Button
                  type="button"
                  onClick={handlePrevious}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </Button>
              )}
              
              {step < 4 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto flex items-center gap-2"
                >
                  Continuer
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="ml-auto flex items-center gap-2 bg-gradient-to-r from-salem-700 to-salem-400"
                >
                  <Sparkles className="w-4 h-4" />
                  Obtenir mon devis
                </Button>
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