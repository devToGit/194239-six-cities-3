import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const OfferData = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    photo: `http://localhost:1337/img/apartment-01.jpg`
  },
  {
    id: 2,
    title: `Wood and stone place`,
    photo: `http://localhost:1337/img/apartment-01.jpg`
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    photo: `http://localhost:1337/img/apartment-01.jpg`
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    photo: `http://localhost:1337/img/apartment-01.jpg`
  }
];

it(`Should <Main /> render correctly`, () => {
  const tree = renderer
    .create(<Main
      placesCount={314}
      offers={OfferData}
      onCardTitleClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
