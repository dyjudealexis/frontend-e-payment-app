const Feature1 = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
        <div className="max-w-7xl my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex items-center">
            <div>
              <img
                className="rounded-30 border"
                src="/images/about/about-company.webp"
                alt="Person using ePayment App"
              />
            </div>
            <div>
              <h2 className="sm:text-4xl text-2xl font-semibold text-gray-900 mb-4">
                About ePayment App
              </h2>
              <p className="mb-3">
                ePayment App is a modern digital wallet and payment solution designed to simplify how people pay bills, transfer money, and manage finances online.
              </p>
              <p className="mb-3">
                Our platform connects users to a wide range of billers, including utilities, telecoms, government services, and more — all in one secure and convenient place.
              </p>
              <p>
                With an emphasis on security, ease of use, and reliability, ePayment App is helping Filipinos embrace digital financial services with confidence and control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature1;
