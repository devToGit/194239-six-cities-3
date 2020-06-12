/* eslint-disable react/prop-types */
import React from "react";
import Card from "../card/card.jsx";
// import PropTypes from "prop-types";

const PlacesList = ({offers, onCardTitleClick}) => {

  const cards = offers.map((offer) => {

    return (
      <Card key = {offer.id}
        offer = {offer}
        onCardTitleClick={onCardTitleClick}
      />
    );
  });
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
    </div>
  );
};

export default PlacesList;
