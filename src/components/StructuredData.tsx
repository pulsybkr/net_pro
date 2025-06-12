import React from 'react';

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'service';
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'organization' }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Éclat d'Nord",
      "description": "Entreprise de nettoyage professionnel de bureaux à Lille et métropole. Services sur mesure, équipe qualifiée, devis gratuit en ligne.",
      "url": "https://eclat-nord.fr",
      "telephone": "+33-1-XX-XX-XX-XX", // À remplacer par votre numéro
      "email": "contact@eclat-nord.fr", // À remplacer par votre email
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Votre adresse", // À remplacer
        "addressLocality": "Lille",
        "addressRegion": "Hauts-de-France",
        "postalCode": "59000",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.6292,
        "longitude": 3.0573
      },
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 08:00-12:00"
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 50.6292,
          "longitude": 3.0573
        },
        "geoRadius": "50000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de nettoyage",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage de bureaux",
              "description": "Service de nettoyage professionnel pour bureaux et espaces de travail"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nettoyage industriel",
              "description": "Nettoyage d'espaces industriels et commerciaux"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Entretien d'immeubles",
              "description": "Maintenance et entretien complet d'immeubles de bureaux"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5"
      },
      "priceRange": "€€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "founder": {
        "@type": "Person",
        "name": "Fondateur Éclat d'Nord"
      },
      "foundingDate": "2010",
      "numberOfEmployees": "25",
      "slogan": "L'excellence dans le nettoyage professionnel",
      "brand": {
        "@type": "Brand",
        "name": "Éclat d'Nord"
      },
      "sameAs": [
        "https://www.facebook.com/eclat-nord", // À remplacer par vos réseaux sociaux
        "https://www.linkedin.com/company/eclat-nord",
        "https://www.instagram.com/eclat_nord"
      ]
    };

    return baseData;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  );
};

export default StructuredData; 