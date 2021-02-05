import React, { useEffect, useState } from "react";
import { returnMyCardsForDay } from "../../services/expservices.js";
import MyCard from "../MyCard.js";
import Axios from "axios";

function MyDay(props) {
  const [myCards, setMyCards] = useState([]);
  let newDate = new Date()
    let date = newDate.getDate().toString();
    let month = (newDate.getMonth() + 1).toString();
    let year = (newDate.getFullYear()).toString();
    let currentDate=(year+"-"+month+"-"+date)

  useEffect(() => {
    Axios.post("http://localhost:3001/api/get", { date: props.currDay }).then(
      (response) => {
        setMyCards(response.data);
      }
    );
  }, [props.currDay]);

  const deleteItem = (item) => {
    Axios.post("http://localhost:3001/api/delete",{item:item,date:props.currDay});
  };

  const update = (desc, name) => {
    Axios.put("http://localhost:3001/api/update", {
      desc: desc,
      name: name,
      currdate:currentDate,
    }).then((response) => {
      setMyCards(response.data);
    });
  };



  const FormSizeDemo = () => {
    const [componentSize, setComponentSize] = useState("default");

    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
  };
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
          title={card.name}
          deleteMe={() => {
            deleteItem(card.name);
            setMyCards(myCards.filter((x, y) => y != index));
          }}
          setDescription={(desc) => {
            let cards = [...myCards];
            cards[index].description = desc;
            setMyCards(cards);
            update(desc, myCards[index].name);
          }}
          description={card.quantity}
        />
      ))}
    </div>
  );
}

export default MyDay;
