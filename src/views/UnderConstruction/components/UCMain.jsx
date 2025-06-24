import React from "react";
import Link from "../../../components/Link";

const Feature1 = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
        <div className="max-w-7xl my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex items-center">
            <div>
              <img
                className="rounded-30 border"
                src="/images/under-construction/uc-image.webp"
                alt="Person working on laptop"
              />
            </div>
            <div>
              <h2 className="sm:text-4xl text-2xl font-semibold text-gray-900 mb-4">
                Page Under Construction
              </h2>
              <p className="mb-8">
                We’re working hard to bring you a new and improved experience. Stay tuned for updates and thank you for your patience!
              </p>
              <Link children={"Back To Homepage"} to={"/"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature1;
