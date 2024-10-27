// import React from "react";
// import "./Cards.css";
// import { CardsData } from "../Data";
// import { Card } from "../Card/Card";

// function Cards() {
//   return (
//     <div className="Cards">
//       {CardsData.map((card, id) => {
//         return (
//           <div className="parentContainer">
//             <Card
//               title={card.title}
//               color={card.color}
//               value={card.value}
//               png={card.png}
//               series={card.series}
//               id={card.id}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Cards;

import React, { useState } from "react";
import "./Cards.css";
import { CardsData } from "../Data";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
