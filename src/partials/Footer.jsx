const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pt-12 pb-8 text-white bg-white border-gray-200">
      <div className="pt-4 pt-6 mt-10 text-center text-gray-600">
        © {currentYear} ePayment App. All rights reserved.
      </div>

      <div className="text-center text-gray-600 pt-2">
        Developed by <a href="https://www.jude-alexis-dy.site" target="_blank">Jude Alexis Dy</a>
      </div>
    </footer>
  );
};

export default Footer;
