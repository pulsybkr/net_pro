export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4">1. Collecte des informations</h2>
              <p className="text-gray-600 mb-4">
                Nous collectons les informations que vous nous fournissez lorsque vous :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Remplissez un formulaire de contact</li>
                <li>Demandez un devis</li>
                <li>Vous inscrivez à notre newsletter</li>
                <li>Utilisez notre site web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">2. Utilisation des informations</h2>
              <p className="text-gray-600 mb-4">
                Les informations que nous collectons sont utilisées pour :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Personnaliser votre expérience</li>
                <li>Améliorer notre site web</li>
                <li>Traiter vos demandes</li>
                <li>Vous contacter concernant nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">3. Protection des informations</h2>
              <p className="text-gray-600 mb-4">
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver 
                la sécurité de vos informations personnelles. Nous utilisons un 
                chiffrement à la pointe de la technologie pour protéger les informations 
                sensibles transmises en ligne.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">4. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de 
                navigation. Vous pouvez désactiver les cookies dans les paramètres 
                de votre navigateur, mais cela pourrait affecter certaines 
                fonctionnalités du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">5. Divulgation à des tiers</h2>
              <p className="text-gray-600 mb-4">
                Nous ne vendons, n'échangeons et ne transférons pas vos informations 
                personnelles identifiables à des tiers. Cela n'inclut pas les tiers 
                de confiance qui nous aident à exploiter notre site web ou à mener 
                nos activités, tant que ces parties conviennent de garder ces 
                informations confidentielles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">6. Consentement</h2>
              <p className="text-gray-600 mb-4">
                En utilisant notre site, vous consentez à notre politique de 
                confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">7. Modifications</h2>
              <p className="text-gray-600 mb-4">
                Nous nous réservons le droit de modifier cette politique de 
                confidentialité à tout moment. Les modifications prendront effet 
                immédiatement après leur publication sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">8. Nous contacter</h2>
              <p className="text-gray-600">
                Pour toute question concernant cette politique de confidentialité, 
                vous pouvez nous contacter :<br /><br />
                Éclat d’Nord<br />
                Téléphone : 06 29 27 15 31<br />
                Email : eclatdnord@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 