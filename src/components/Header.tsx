import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-salem-700">
            <img src="/logo.svg" alt="Éclat d’Nord" className="w-24" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="hover:text-salem-700 transition-colors">
              Nos Services
            </Link>
            <Link href="/about" className="hidden hover:text-salem-700 transition-colors">
              À Propos
            </Link>
            <Link href="/blog" className="hover:text-salem-700 transition-colors hidden">
              Blog
            </Link>
            <Link href="/#contact" className="hover:text-salem-700 transition-colors">
              Contact
            </Link>
            <Button asChild variant="default">
              <Link href="/devis">Devis Gratuit</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
} 