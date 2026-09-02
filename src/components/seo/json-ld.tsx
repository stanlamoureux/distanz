import { OG_IMAGE_URL, SITE_DESCRIPTION, SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: SITE_URL,
        email: SITE_EMAIL,
        logo: `${SITE_URL}/icon`,
        image: OG_IMAGE_URL,
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#site`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "Product",
        name: "DISTANZ, troisième roue électrique française",
        image: OG_IMAGE_URL,
        description: SITE_DESCRIPTION,
        brand: { "@type": "Brand", name: SITE_NAME },
        category: "Aide technique à la mobilité",
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: 16,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Mon fauteuil est-il compatible ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Marque, modèle, châssis pliant ou rigide, potences, diamètre de tube. La page Compatibilité liste les fauteuils. Un conseiller DISTANZ vérifie châssis par châssis.",
            },
          },
          {
            "@type": "Question",
            name: "Peut-on financer DISTANZ avec des aides ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MDPH, PCH, mutuelle, Agefiph, aides régionales selon les dossiers. Appelez un conseiller DISTANZ : on lit votre situation et on vous accompagne pour obtenir les aides disponibles.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
