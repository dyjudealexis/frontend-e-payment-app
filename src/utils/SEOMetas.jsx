import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEOMetas = ({ title, description, keywords, type, url, image, card, context }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content={card} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">
          {`
            {
              "@context": "${context}",
              "@type": "WebSite",
              "name": "${import.meta.env.VITE_APP_NAME}",
              "url": "${url}"
            }
          `}
        </script>
      </Helmet>
    </HelmetProvider>
  );
};

export default SEOMetas;
