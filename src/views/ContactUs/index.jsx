import { Helmet, HelmetProvider } from "react-helmet-async";

import ScrollToTop from "../../components/ScrollToTop";
import Header from "../../partials/Header";
import HeaderPadding from "../../partials/HeaderPadding";
import Footer from "../../partials/Footer";
import Contact from "../Home/components/Contact";

const domain = import.meta.env.VITE_APP_URL;

const ContactUs = () => {
  return (
    <HelmetProvider>
      <ScrollToTop />

      <Helmet>
        <title>Contact Us – ePayment App</title>
        <meta
          name="description"
          content="Need help or have questions? Contact the ePayment App team for support, inquiries, or partnership opportunities. We're here to assist you."
        />
        <meta
          name="keywords"
          content="contact ePayment App, support, customer service, fintech contact, online payments Philippines"
        />
        <meta name="author" content="ePayment App Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href={`${domain}/contact-us`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/contact-us`} />
        <meta property="og:title" content="Contact Us – ePayment App" />
        <meta
          property="og:description"
          content="Reach out to ePayment App for support, questions, or collaborations. We're just one message away."
        />
        <meta property="og:image" content={`${domain}/og-image.webp`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${domain}/contact-us`} />
        <meta name="twitter:title" content="Contact Us – ePayment App" />
        <meta
          name="twitter:description"
          content="Connect with the ePayment App team for assistance or inquiries about our digital payment services."
        />
        <meta name="twitter:image" content={`${domain}/og-image.webp`} />
      </Helmet>

      <Header />
      <HeaderPadding />
      <div className="py-8"></div>
      <Contact />
      <Footer />
    </HelmetProvider>
  );
};

export default ContactUs;
