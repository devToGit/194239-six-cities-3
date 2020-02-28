import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const handleCardTitleClick = () => {};

const App = (props) => {
  const {placesCount} = props;
  const {offers} = props;

  return (
    <Main
      placesCount={placesCount}
      offers={offers}
      onCardTitleClick={handleCardTitleClick}
    />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;

