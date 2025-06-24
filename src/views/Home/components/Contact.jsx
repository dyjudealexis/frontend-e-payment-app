import PhoneIcon from "../../../components/PhoneIcon";
import EmailIcon from "../../../components/EmailIcon";
import LocationIcon from "../../../components/LocationIcon";

const Contact = () => {
  return (
    <>
      <div className="w-full text-center mb-8">
        <h2 className="sm:text-4xl text-2xl font-semibold text-gray-900 mb-4">
          Contact Us
        </h2>
        <div className="w-full flex justify-center">
          <p style={{ maxWidth: "700px" }} className="text-center lg:px-8 px-4">
            {`For feedback, comments, and service-related requests, please don't
            hesitate to reach out to us!`}
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-28">
        <div className="md:flex items-center justify-center">
          <div className="flex justify-center items-center md:mb-0 mb-2">
            <span>
              <PhoneIcon />
            </span>
            <a href="tel:09204042919" className="contact-a ml-2">
              09204042919
            </a>
          </div>
          <span className="px-2 md:block hidden">|</span>
          <div className="flex justify-center items-center md:mb-0 mb-2">
            <span>
              <EmailIcon />
            </span>
            <a href="mailto:dyjudealexis@gmail.com" className="contact-a ml-2">
              dyjudealexis@gmail.com
            </a>
          </div>
          <span className="px-2 md:block hidden">|</span>
          <div className="flex justify-center items-center md:mb-0 mb-2">
            <span>
              <LocationIcon />
            </span>
            <a
              href="#"
              className="contact-a ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Taguig City
            </a>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
        <div className="max-w-7xl my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                className="rounded-30 mt-8"
                src="/images/homepage/contact-img.webp"
                alt="Person working on laptop"
              />
            </div>
            <div>
              <h2 className="sm:text-3xl text-2xl font-semibold text-gray-900 mb-2">
                Get In Touch
              </h2>
              <form className="space-y-6">
                <div className="-space-y-px">
                  <div className="pt-4">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm rounded-3xl py-3"
                      placeholder="Name"
                    />
                  </div>
                  <div className="pt-4">
                    <input
                      id="company-name"
                      name="company-name"
                      type="text"
                      autoComplete="organization"
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm rounded-3xl py-3"
                      placeholder="Company Name (Optional)"
                    />
                  </div>
                  <div className="pt-4">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm rounded-3xl py-3"
                      placeholder="Email"
                    />
                  </div>
                  <div className="pt-4">
                    <input
                      id="mobile-number"
                      name="mobile-number"
                      type="tel"
                      autoComplete="tel"
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm rounded-3xl py-3"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="pt-4">
                    <select
                      id="subject"
                      name="subject"
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm rounded-3xl py-3"
                    >
                      <option>-- Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Feedback</option>
                      <option>Support</option>
                    </select>
                  </div>
                  <div className="pt-4">
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm rounded-3xl py-3"
                      placeholder="Message"
                      style={{ height: "100px" }}
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-3xl text-sm font-semibold hover:opacity-50"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
