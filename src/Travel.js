// My component for countries
import React from "react";

const Country = ({ country, name, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <blockquote>{country}</blockquote>
      <cite>{name}</cite>
    </figcaption>
  </figure>
);

export default Country;