import Link from "next/link";
import { Button } from "./ui/button";

export default function CTASection() {
  return (
    <section className="py-24 bg-salem-700 text-white">
      <div className="hidden container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à transformer votre espace de travail ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Obtenez un devis gratuit en quelques minutes et découvrez nos solutions sur mesure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/devis">Devis Gratuit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-salem-700">
              <Link href="/#contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 