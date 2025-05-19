import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* À propos */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Éclat d’Nord</h3>
            <p className="mb-4">
              Votre partenaire de confiance pour le nettoyage professionnel de bureaux à Lille et ses environs.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-blue-500">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-pink-500">
                <Instagram size={20} />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-salem-400">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-white">
                  Nettoyage de bureaux
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Nettoyage de vitres
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Entretien sanitaire
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Nettoyage industriel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>123 Rue du Commerce, 59000 Lille</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+33320000000" className="hover:text-white">
                  03 20 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:contact@pronet-lille.fr" className="hover:text-white">
                  contact@pronet-lille.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/devis" className="hover:text-white">
                  Devis Gratuit
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-white">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="hover:text-white">
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>
            © {new Date().getFullYear()} Éclat d’Nord. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
} 