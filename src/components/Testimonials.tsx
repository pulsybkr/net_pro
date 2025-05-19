import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice Administrative",
      company: "Tech Solutions Lille",
      content: "Service impeccable et équipe très professionnelle. Nos bureaux n'ont jamais été aussi propres !",
      rating: 5,
      image: "/testimonials/person1.jpg"
    },
    {
      name: "Pierre Martin",
      role: "Gérant",
      company: "Cabinet Martin & Associés",
      content: "Flexibilité et qualité de service exceptionnelles. Je recommande vivement Éclat d’Nord.",
      rating: 5,
      image: "/testimonials/person2.jpg"
    },
    {
      name: "Sophie Laurent",
      role: "Office Manager",
      company: "Digital Nord",
      content: "Une équipe à l'écoute qui s'adapte parfaitement à nos besoins spécifiques.",
      rating: 5,
      image: "/testimonials/person3.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre meilleure récompense
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="hidden w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-600 hidden">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 