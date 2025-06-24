const features = [
  {
    img: "/images/about/mission.webp",
    title: "Mission",
    description:
      "To empower individuals and businesses in the Philippines by providing a seamless, secure, and accessible digital payment platform that simplifies financial transactions.",
  },
  {
    img: "/images/about/vision.webp",
    title: "Vision",
    description:
      "To become the leading digital payment ecosystem in the region, enabling inclusive financial access and driving innovation in digital finance.",
  },
  {
    img: "/images/about/values.webp",
    title: "Values",
    description:
      "Integrity, innovation, user-centricity, and commitment to excellence guide everything we do at ePayment App.",
  },
];

const MissionVisionValues = () => {
  return (
    <div
      id="features"
      className="relative w-full px-8 py-10 border-gray-200 md:py-16 lg:py-10 xl:py-16 xl:px-0"
    >
      <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
        <div className="flex flex-col w-full mt-5 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:mt-10 lg:mt-10">
          {features.map((feature, index) => (
            <div key={index} className="w-full px-4 mb-10 sm:mb-10 lg:mb-14">
              <div className="relative flex flex-col items-center w-full h-full p-0 m-0">
                <img src={feature.img} alt={feature.title} className="mb-4 rounded-30" />
                <h4 className="relative sm:text-2xl text-1xl font-semibold text-center">{feature.title}</h4>
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

export default MissionVisionValues;
