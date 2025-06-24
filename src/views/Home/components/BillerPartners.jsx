import Link from "../../../components/Link";

const values = [
  { name: "Cignal", image: "/images/biller-partners/cignal.webp" },
  { name: "Converge", image: "/images/biller-partners/converge.webp" },
  { name: "Globe", image: "/images/biller-partners/globe.webp" },
  { name: "Mastercard", image: "/images/biller-partners/mastercard.webp" },
  { name: "Maynilad", image: "/images/biller-partners/maynilad.webp" },
  { name: "Meralco", image: "/images/biller-partners/meralco.webp" },
  { name: "Pag-IBIG", image: "/images/biller-partners/pag-ibig.webp" },
  {
    name: "Philippine Airlines",
    image: "/images/biller-partners/ph-airlines.webp",
  },
  { name: "PLDT", image: "/images/biller-partners/pldt.webp" },
  //   { name: 'Primewater', image: '/images/biller-partners/primewater.webp' },
  { name: "Smart", image: "/images/biller-partners/smart.webp" },
  { name: "SSS", image: "/images/biller-partners/sss.webp" },
  { name: "Visa", image: "/images/biller-partners/visa.webp" },
];

const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const BillerPartners = () => {
  const shuffledValues = shuffleArray([...values]);

  return (
    <>
      {/* md:w-1/4 lg:w-1/6 xl:w-1/9 */}
      <div className="container flex flex-col items-center justify-between max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
        <div className="mt-32 mb-8">
          <h2 className="sm:text-4xl text-2xl font-semibold text-gray-900 mb-8 text-center">
            Biller Partners
          </h2>
          <div className="flex flex-wrap mx-2 sm:justify-start justify-center">
            {shuffledValues.map((value, index) => (
              <div
                key={index}
                className="sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 flex items-center justify-center"
              >
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="card-image flex justify-center items-center">
                    <img
                      src={value.image}
                      alt={value.name}
                      className="mv-img sm:object-contain sm:px-8 partners-imgs"
                    />
                  </div>
                  {/* <h5 className="text-lg font-semibold mb-2 mt-3">{value.name}</h5> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/biller-partners">Show More</Link>
      </div>
      <div className="w-full" style={{height: "80px"}}></div>
    </>
  );
};

export default BillerPartners;
