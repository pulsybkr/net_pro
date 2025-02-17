export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4">1. Informations légales</h2>
              <p className="text-gray-600 mb-4">
                ProNet Lille<br />
                SARL au capital de XX XXX euros<br />
                RCS Lille Métropole : XXX XXX XXX<br />
                Siège social : [Adresse complète]<br />
                N° TVA : XX XX XXX XXX
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">2. Contact</h2>
              <p className="text-gray-600 mb-4">
                Téléphone : 03 20 XX XX XX<br />
                Email : contact@pronet-lille.fr
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">3. Hébergement</h2>
              <p className="text-gray-600 mb-4">
                Ce site est hébergé par :<br />
                [Nom de l'hébergeur]<br />
                [Adresse de l'hébergeur]<br />
                [Contact hébergeur]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">4. Propriété intellectuelle</h2>
              <p className="text-gray-600 mb-4">
                L'ensemble de ce site relève de la législation française et internationale 
                sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                reproduction sont réservés, y compris pour les documents téléchargeables 
                et les représentations iconographiques et photographiques.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">5. Responsabilité</h2>
              <p className="text-gray-600 mb-4">
                La société ProNet Lille s'efforce d'assurer au mieux de ses possibilités 
                l'exactitude et la mise à jour des informations diffusées sur ce site, 
                dont elle se réserve le droit de corriger le contenu à tout moment et 
                sans préavis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">6. Droit applicable</h2>
              <p className="text-gray-600">
                Les présentes mentions légales sont soumises au droit français. En cas 
                de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 