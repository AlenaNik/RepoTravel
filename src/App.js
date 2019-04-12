import React from "react";

import Travels from "./Travels";

const countries = [
       {
          country: "Why I love travelling?",
          name: "I've been traveling all my life and people still ask, why I love to travel. Read my TOP countries and you will know why I love to travel.",
          image: "https://image.freepik.com/vector-gratis/concepto-familia-bicicleta-dibujos-animados-padres-hijo-e-hija-ilustracion-vectorial_1284-12493.jpg"
       },
        { 
          country: "Brazil",
          name: "So I wanted to take this opportunity to reflect on and share some things I love about Brazil.",
          image: "https://static.vecteezy.com/system/resources/previews/000/119/648/non_2x/free-brazil-illustration-icon-and-symbol-vector.jpg"
        },
        {
          country: "Spain",
          name: "From Barcelona and the beautiful beaches to the exceptional food and the atmospheric villages, here are the things I like most about Spain.",
          image: "https://image.freepik.com/vector-gratis/diseno-fondo-iconos-espana_1284-909.jpg"
        }
   ];

   const App = () => (
     <div>
        <h2>My Travels</h2>
        <Travels countries={countries}/>
     </div>
  );
  
  export default App;
