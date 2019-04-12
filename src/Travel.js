// My component for countries
import React from "react";

const Travel = ({ country, name, image }) => (
  <figure>
    <img src={image} alt={name}/>
    <h2>{country}, {name}</h2>
  </figure>

);

export default Travel;