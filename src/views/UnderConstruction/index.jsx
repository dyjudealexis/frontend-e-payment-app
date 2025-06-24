import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import HeaderPadding from "../../partials/HeaderPadding";
import ScrollToTop from "../../components/ScrollToTop";
import Feature1 from "./components/UCMain";

const domain = import.meta.env.VITE_APP_URL;

const UnderConstruction = () => {
  return (
    <HelmetProvider>
      <ScrollToTop />

      <Helmet>
        <title>Page Under Construction – ePayment App</title>
        <meta
          name="description"
          content="This page is currently under construction. Check back soon for exciting updates from ePayment App."
        />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href={`${domain}/under-construction`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/under-construction`} />
        <meta
          property="og:title"
          content="Page Under Construction – ePayment App"
        />
        <meta
          property="og:description"
          content="We're working on something great. Visit this page soon to explore new features."
        />
        <meta
          property="og:image"
          content={`${domain}/og-image.webp`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${domain}/under-construction`} />
        <meta
          name="twitter:title"
          content="Page Under Construction – ePayment App"
        />
        <meta
          name="twitter:description"
          content="This section is under development. We're launching new content soon!"
        />
        <meta
          name="twitter:image"
          content={`${domain}/og-image.webp`}
        />
      </Helmet>

      <Header />
      <HeaderPadding />
      <div className="py-20"></div>
      <Feature1 />
      <Footer />
    </HelmetProvider>
  );
};

export default UnderConstruction;
