import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import HeaderPadding from "../../partials/HeaderPadding";
import billerData from "../../assets/json/list-biller-partners.json";
import ScrollToTop from "../../components/ScrollToTop";
import Sidebar from "./components/Sidebar";
import List from "./components/List";

const domain = import.meta.env.VITE_APP_URL;

const BillerPartners = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const categories = Array.from(
    new Set(
      billerData.Data.map((biller) => biller.Category.trim().toLowerCase())
    )
  )
    .sort()
    .map((category) =>
      category
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );

  const filteredBillers = billerData.Data.filter((biller) => {
    const categoryMatch =
      !selectedCategory ||
      biller.Category.trim().toLowerCase() === selectedCategory.toLowerCase();
    const searchMatch = biller.Description.toLowerCase().includes(
      searchQuery.toLowerCase()
    );
    return categoryMatch && searchMatch;
  });

  const paginatedBillers = filteredBillers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleShowAllClick = () => {
    if (selectedCategory === null) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(null);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setSearchQuery("");
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <HelmetProvider>
      <ScrollToTop />

      <Helmet>
        <title>Biller Partners – ePayment App</title>
        <meta
          name="description"
          content="Browse a wide list of biller partners supported by ePayment App. Pay your bills for utilities, government, telecom, and more – fast and securely."
        />
        <meta
          name="keywords"
          content="biller partners, pay bills online, utilities, telecom payments, ePayment App, Philippines bills"
        />
        <meta name="author" content="ePayment App Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href={`${domain}/biller-partners`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}/biller-partners`} />
        <meta property="og:title" content="Biller Partners – ePayment App" />
        <meta
          property="og:description"
          content="Explore ePayment App's complete list of biller partners across various industries in the Philippines."
        />
        <meta property="og:image" content={`${domain}/og-image.webp`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${domain}/biller-partners`} />
        <meta name="twitter:title" content="Biller Partners – ePayment App" />
        <meta
          name="twitter:description"
          content="Quickly pay bills for utilities, government services, telecom providers and more with ePayment App’s biller partners."
        />
        <meta name="twitter:image" content={`${domain}/og-image.webp`} />
      </Helmet>

      <Header />
      <HeaderPadding />
      <div className="py-20"></div>
      <div className="flex flex-col md:flex-row max-w-6xl px-8 mx-auto -mt-28 xl:px-0">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          handleShowAllClick={handleShowAllClick}
          setSelectedCategory={setSelectedCategory}
        />
        <List
          filteredBillers={paginatedBillers}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          totalItems={filteredBillers.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </HelmetProvider>
  );
};

export default BillerPartners;
