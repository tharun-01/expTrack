import React, { useEffect, useState } from "react";
import { returnMyCardsForDay } from "../../services/expservices.js";
import MyCard from "../MyCard.js";
function MyDay(props) {
  const [myCards, setMyCards] = useState([]);
  useEffect(() => {
    setMyCards(returnMyCardsForDay(props.currDay));
  }, [props]);

  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {myCards.map((card, index) => (
        <MyCard
          key={index}
          title={card.title}
          deleteMe={() => {
            setMyCards(myCards.filter((x, y) => y != index));
          }}
          setDescription={(desc)=>{
              let cards = [... myCards]
              cards[index].description=desc
              setMyCards(cards)

          }}
          description={card.description}

        />
      ))}
    </div>
  );
}

export default MyDay;
