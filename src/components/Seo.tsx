// src/components/Seo.tsx
import React from "react";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords = "desenvolvimento web RS, sites RS, sistemas RS, marketing digital RS",
  url = "https://www.codificaweb.com.br",
  image = "/img/og-image.png",
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Codifica Web",
    image: image,
    "@id": url,
    url: url,
    telephone: "+5551991488088",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Exemplo, 123",
      addressLocality: "Porto Alegre",
      addressRegion: "RS",
      postalCode: "90000-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -30.0346,
      longitude: -51.2177,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [
      "https://www.facebook.com/codificaweb",
      "https://www.instagram.com/codificaweb",
    ],
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Codifica Web" />

      {/* SEO Local */}
      <meta name="geo.region" content="BR-RS" />
      <meta name="geo.placename" content="Rio Grande do Sul" />
      <meta name="geo.position" content="-30.0346;-51.2177" />
      <meta name="ICBM" content="-30.0346, -51.2177" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default Seo;
