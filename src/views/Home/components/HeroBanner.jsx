import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div
      className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 border-b"
      style={{
        background: "url('/images/homepage/home-bg.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
        <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-10 lg:text-left">
          <h1 className="relative mb-4 text-4xl leading-tight text-gray-900 sm:text-6xl xl:mb-8 font-semibold">
            Pay Smarter, Live Better
          </h1>
          <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
            Discover the fastest way to settle your bills online. With ePayment App, everything is just a tap away — reliable, fast, and secure.
          </p>
          <Link to="/under-construction" className="relative lg:self-start self-center inline-block">
            <img
              src="/images/homepage/download.png"
              alt="download"
              style={{ width: "400px" }}
            />
          </Link>
        </div>
        <div className="relative z-40 flex items-end justify-center w-full h-full max-w-3xl lg:mt-0 lg:w-1/2">
          <img
            className="img-fluid pt-8 lg:pt-0"
            src="/images/homepage/smartphone.webp"
            alt="App"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover"></div>
    </div>
  );
};

export default HeroBanner;
