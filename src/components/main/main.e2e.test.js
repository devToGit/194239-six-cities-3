import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`Should click on title`, () => {
  const onCardTitleClick = jest.fn();

  const main = shallow(
      <Main
        placesCount={314}
        offers={OfferData}
        onCardTitleClick={onCardTitleClick}
      />
  );

  const cardTitle = main.find(`.place-card__name`);

  cardTitle.forEach((item) =>{
    item.props().onClick();
  });

  expect(onCardTitleClick).toHaveBeenCalledTimes(cardTitle.length);
})
;
