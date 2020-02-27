import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  PLACES_COUNT: 314
};

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


ReactDOM.render(
    <App
      placesCount={Settings.PLACES_COUNT}
      offers={OfferData}
    />,
    document.querySelector(`#root`)
);

