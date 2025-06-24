import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import AboutCompany from "./components/AboutCompany";
import HeaderPadding from "../../partials/HeaderPadding";
import MissionVisionValues from "./components/MissionVisionValues";
import ScrollToTop from "../../components/ScrollToTop";

const domain = import.meta.env.VITE_APP_URL;

const About = () => {
  return (
    <HelmetProvider>
      <ScrollToTop />

      <Helmet>
        <title>About Us – ePayment App</title>
        <meta
          name="description"
          content="Learn more about ePayment App – our mission, vision, and values. Discover how we're making digital payments secure, simple, and accessible for everyone in the Philippines."
        />
        <meta
          name="keywords"
          content="about ePayment App, digital payment company, mission vision values, fintech Philippines"
        />
        <meta name="author" content="ePayment App Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href={`${domain}/about`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/about`} />
        <meta property="og:title" content="About Us – ePayment App" />
        <meta
          property="og:description"
          content="Get to know ePayment App's purpose, goals, and dedication to transforming digital payments in the Philippines."
        />
        <meta property="og:image" content={`${domain}/og-image.webp`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${domain}/about`} />
        <meta name="twitter:title" content="About Us – ePayment App" />
        <meta
          name="twitter:description"
          content="Learn about the story behind ePayment App and how we’re shaping the future of online transactions in the Philippines."
        />
        <meta name="twitter:image" content={`${domain}/og-image.webp`} />
      </Helmet>

      <Header />
      <HeaderPadding />
      <div className="py-20"></div>
      <AboutCompany />
      <MissionVisionValues />
      <Footer />
    </HelmetProvider>
  );
};

export default About;
