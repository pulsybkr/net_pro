"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "bureaux"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }

      // Afficher un message de succès
      alert('Votre demande a été envoyée avec succès !');
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "03 20 XX XX XX",
      description: "Du lundi au vendredi, 8h-19h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@pronet-lille.fr",
      description: "Réponse sous 2h ouvrées"
    },
    {
      icon: MapPin,
      title: "Adresse",
      info: "XXX Rue XXXX, Lille",
      description: "59000 Lille, France"
    },
    {
      icon: Clock,
      title: "Horaires",
      info: "7j/7 - 24h/24",
      description: "Service d'urgence disponible"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-blue-600 font-medium bg-blue-50 px-4 py-2 rounded-full text-sm inline-block">
            Contact
          </span>
          <h2 className="text-4xl font-bold">
            Parlons de{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              vos besoins
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Un expert vous répondra dans les plus brefs délais
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-blue-600 font-medium mb-1">{item.info}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Nom complet</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="jean@exemple.fr"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="06 XX XX XX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Entreprise</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Nom de votre entreprise"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-900">Service souhaité</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="bureaux">Nettoyage de Bureaux</option>
                    <option value="vitrerie">Vitrerie</option>
                    <option value="sanitaires">Sanitaires</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-900">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                    placeholder="Décrivez vos besoins..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 px-6 rounded-xl 
                  font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Envoyer le message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 