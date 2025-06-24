import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import HeroBanner from "./components/HeroBanner";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Contact from "./components/Contact";
import BillerPartners from "./components/BillerPartners";
import ScrollToTop from "../../components/ScrollToTop";
import HeaderPadding from "../../partials/HeaderPadding";

const domain = import.meta.env.VITE_APP_URL;

const Home = () => {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Helmet>
        <title>
          ePayment App – Secure and Easy Online Payments in the Philippines
        </title>
        <meta
          name="description"
          content="ePayment App is your trusted partner for fast, secure, and convenient online payments. Pay bills, send money, and manage your transactions all in one place."
        />
        <meta
          name="keywords"
          content="ePayment, online payments, Philippines, digital wallet, pay bills, send money"
        />
        <meta name="author" content="ePayment App Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href={`${domain}/`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/`} />
        <meta
          property="og:title"
          content="ePayment App – Secure and Easy Online Payments"
        />
        <meta
          property="og:description"
          content="Manage your finances, pay bills, and send money with ease using ePayment App."
        />
        <meta property="og:image" content={`${domain}/og-image.webp`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${domain}/`} />
        <meta
          name="twitter:title"
          content="ePayment App – Secure and Easy Online Payments"
        />
        <meta
          name="twitter:description"
          content="Experience seamless transactions and bill payments with ePayment App – your digital wallet in the Philippines."
        />
        <meta name="twitter:image" content={`${domain}/og-image.webp`} />
      </Helmet>

      <Header />
      <HeaderPadding />
      <HeroBanner />
      <Feature1 />
      <Feature2 />
      <BillerPartners />
      <Contact />
      <Footer />
    </HelmetProvider>
  );
};

export default Home;
