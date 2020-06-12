const typeOffer = [`Apartment`, `Private room`];

const price = [120, 80, 132, 180];

const rating = [20, 40, 60, 80, 100];

const title = [
  `Wood and stone place`,
  `Beautiful & luxurious apartment at great location`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

const imgSrcNumber = [1, 2, 3];

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const generateOffer = () => {
  return {
    img: `/img/apartment-0${getRandomArrayItem(imgSrcNumber)}.jpg`,
    price: getRandomArrayItem(price),
    rating: getRandomArrayItem(rating),
    title: getRandomArrayItem(title),
    typeOffer: getRandomArrayItem(typeOffer)
  };
};

const generateOffers = (count) => {
  return new Array(count)
  .fill(``)
  .map(generateOffer);
};

export {generateOffers};
