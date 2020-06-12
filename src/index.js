import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {generateOffers} from "./mock/offers";

const Settings = {
  PLACES_COUNT: 314
};

const OfferData = generateOffers(5);


ReactDOM.render(
    <App
      placesCount={Settings.PLACES_COUNT}
      offers={OfferData}
    />,
    document.querySelector(`#root`)
);

