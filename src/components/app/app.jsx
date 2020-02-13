import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const App = (props) => {
  const {placesCount} = props;
  const {offers} = props;

  return (
    <Main placesCount={placesCount} offers={offers}/>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;

