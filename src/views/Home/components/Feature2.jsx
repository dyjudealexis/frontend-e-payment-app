const features = [
  {
    img: "/images/homepage/feature-1.webp",
    title: "Simplified Bill Payments",
    description: "Pay your Meralco, Maynilad, and other utility bills with ease. Manage all your bills from a single platform and stay on top of your payments.",
  },
  {
    img: "/images/homepage/feature-2.webp",
    title: "Top-Notch Security",
    description: "Your security is our priority. We use advanced encryption to protect your payment information, giving you peace of mind.",
  },
  {
    img: "/images/homepage/feature-3.webp",
    title: "Easy-to-Use Interface",
    description: "Navigate effortlessly through our app with a user-friendly design that makes payments and transfers a breeze.",
  },
  {
    img: "/images/homepage/feature-4.webp",
    title: "Instant Transfers",
    description: "Send and receive money instantly to and from friends, family, and businesses within the Philippines. Fast and reliable money transfers, anytime, anywhere.",
  },
];

const Feature2 = () => {
  return (
    <div
      id="features"
      className="relative w-full px-8 py-10 border-gray-200 md:py-16 lg:py-10 xl:py-16 xl:px-0 "
    >
      <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
        <h3 className="max-w-2xl px-5 mt-2 text-3xl leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-4xl font-semibold">
          Our Features
        </h3>
        <div className="flex flex-col w-full mt-5 lg:grid lg:grid-cols-2 sm:mt-10 lg:mt-10">
          {features.map((feature, index) => (
            <div key={index} className="w-full max-w-md mx-auto mb-10 sm:mb-10 lg:mb-14 px-4">
              <div className="relative flex flex-col items-center w-full h-full p-0 m-0">
                <img src={feature.img} alt={feature.title} className="mb-4 rounded-30" />
                <h4 className="relative text-lg font-semibold text-center">{feature.title}</h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature2;
