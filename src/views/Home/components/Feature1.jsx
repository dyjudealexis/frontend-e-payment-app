import Link from "../../../components/Link";

const Feature1 = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-between max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
        <div
          className="bg-white rounded-30 p-8 flex items-center space-x-8 w-full mt-48 justify-center banner-img-1"
          style={{
            minHeight: "450px",
            background: "url(/images/homepage/feature-banner-1.png)",
            backgroundSize: "cover",
            backgroundPosition: '50%'
          }}
        >
          
          <div className="w-full lg:w-1/2 text-center">
            <h2 className="sm:text-4xl text-2xl font-semibold text-gray-900 mb-4 ">
              Why Choose ePayment App?
            </h2>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Fast & Reliable Transactions:</span> Enjoy quick and dependable payment
              services, tailored for the convenience of Filipinos. Trust us for
              hassle-free and efficient transactions.
            </p>
            {/* <a
              href="#"
              className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white border-t border-gray-200 rounded-full sm:mt-1 fold-bold lg:mx-0 bg-primary hover:opacity-40"
            >
              Learn more
            </a> */}
            <Link to="/about">Learn More</Link>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Feature1;
